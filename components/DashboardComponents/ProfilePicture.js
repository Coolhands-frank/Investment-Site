"use client";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useUser } from "@/context/UserContext";

export default function ProfilePicture({ userId }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isCroppedImage, setIsCroppedImage] = useState(false)
  const cropperRef = useRef(null);

  // Fetch profile image on load
  useEffect(() => {
    async function fetchProfileImage() {
      const { data, error } = await supabase
        .from("users")
        .select("profile_image")
        .eq("id", userId)
        .single();

      if (error) console.error("Error fetching profile image:", error.message);
      else setImage(data?.profile_image ?? "/images/profile.png");
    }

    fetchProfileImage();
  }, [userId]);

  // Extract the file name from the Supabase Storage URL
  const getFileNameFromUrl = (url) => {
    return url ? url.split("/").pop() : null;
  };

  // Delete the old image from Supabase
  const deleteOldImage = async (oldImageUrl) => {
    if (!oldImageUrl) return;

    const fileName = getFileNameFromUrl(oldImageUrl);
    if (!fileName) return;

    const { error } = await supabase.storage.from("profile-images").remove([fileName]);

    if (error) {
      console.error("Error deleting old profile image:", error.message);
    } else {
      console.log("Old image deleted successfully.");
    }
  };

  // Handle File Selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file || !file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    setPreview(URL.createObjectURL(file)); // Show image preview for cropping
  };

  // Crop Image
  const cropImage = () => {
    if (cropperRef.current) {
      const canvas = cropperRef.current.cropper.getCroppedCanvas();
      if (!canvas) return;
      canvas.toBlob((blob) => {
        setCroppedImage(blob);
      }, "image/png");
      setIsCroppedImage(true)
    }
  };

  // Upload Image to Supabase with Auto-Delete of Old Image
  const uploadImage = async () => {
    if (!croppedImage) return alert("Please crop the image first!");

    setUploading(true);

    // Retrieve the current profile image URL before uploading
    const { data: userData, error: fetchError } = await supabase
      .from("users")
      .select("profile_image")
      .eq("id", userId)
      .single();

    if (fetchError) {
      console.error("Error fetching current profile image:", fetchError.message);
    }

    const oldImageUrl = userData?.profile_image; // Get old image URL

    // Generate a unique file name
    const fileName = `${userId}-${Date.now()}.png`;

    // Upload new image to Supabase
    const { data, error } = await supabase.storage
      .from("profile-images")
      .upload(fileName, croppedImage, { cacheControl: "3600", upsert: true });

    if (error) {
      console.error("Upload error:", error.message);
      alert("Failed to upload image.");
      setUploading(false);
      return;
    }

    // Get public URL of the new image
    const { data: fileData } = supabase.storage
      .from("profile-images")
      .getPublicUrl(fileName);

    // Save new image URL in users table
    const { error: updateError } = await supabase
      .from("users")
      .update({ profile_image: fileData.publicUrl })
      .eq("id", userId);

    if (updateError) {
      console.error("Error updating profile image:", updateError.message);
      alert("Failed to save profile image.");
    } else {
      setImage(fileData.publicUrl); // Update state with new image
      setPreview(null); // Hide cropping UI
      deleteOldImage(oldImageUrl); // Delete old image from Supabase
    }

    setUploading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        {/* Profile Image */}
        <img
          src={image || "/images/profile.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
        />

        {/* Hidden File Input */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Edit Button */}
        <button
          onClick={() => document.getElementById("fileInput").click()}
          className="absolute bottom-1 right-1 bg-gray-500 text-white p-1.5 rounded-full border-2 border-white shadow-md hover:bg-gray-700 transition"
        >
          {uploading ? "..." : <PencilIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Image Cropper Modal */}
      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium mb-4">Crop Image</h2>
            <Cropper
              src={preview}
              style={{ height: 300, width: 300 }}
              aspectRatio={1}
              guides={false}
              ref={cropperRef}
              viewMode={1}
              dragMode="move"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={cropImage}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                {isCroppedImage ? "Cropped" : "Crop"}
              </button>
              <button
                onClick={uploadImage}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
              <button
                onClick={() => setPreview(null)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
