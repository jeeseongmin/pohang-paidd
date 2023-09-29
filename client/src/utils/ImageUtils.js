export const ImageUtils = {
  convertGoogleDriveImage: (originURL) => {
    const fileToken = originURL.split("/file/d/")[1].split("/view")[0];
    return `https://drive.google.com/uc?id=${fileToken}`;
  }
}