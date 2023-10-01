export const ImageUtils = {
  convertGoogleDriveImage: (originURL) => {
    const midToken = originURL.split("/file/d/");
    if (midToken[1]) {
      const fileToken = midToken[1].split("/view")[0];
      return `https://drive.google.com/uc?id=${fileToken}`;
    } else return '';
    
  }
}