import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
  cloud_name:"duclijuh8",
  api_key:"535534253755236",
  api_secret:"-07cELOThL9jg0kSMYpXp4NuHaQ"
})

export const uploadImage = async filePath => {
  return await cloudinary.uploader.upload(filePath,{
    folder:'posts'
  })
};

export const deleteImage = async id => {
  return await cloudinary.uploader.destroy(id)
}