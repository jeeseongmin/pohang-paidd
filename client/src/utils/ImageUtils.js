export const ImageUtils = {
  convertGoogleDriveImage: (originURL) => {
    const midToken = originURL.split("/file/d/");
    if (midToken[1]) {
      const fileToken = midToken[1].split("/view")[0];
      // return `https://drive.google.com/uc?id=${fileToken}`;
      return `https://drive.google.com/thumbnail?id=${fileToken}&sz=w1000`;
      // https://drive.google.com/thumbnail?id=16mmwbNxpmmu81NBJ5nuOuVIR_SX8xpjU&sz=w1000
    } else return '';
  },
  // 구글 드라이브 오류로 인해 다시 인코딩
  convertGoogleDriveImage2: (originURL) => {
    const midToken = originURL.split("id=");
    if (midToken[1]) {
      const fileToken = midToken[1].split("/view")[0];
      // return `https://drive.google.com/uc?id=${fileToken}`;
      return `https://drive.google.com/thumbnail?id=${fileToken}&sz=w1000`;
      // https://drive.google.com/thumbnail?id=16mmwbNxpmmu81NBJ5nuOuVIR_SX8xpjU&sz=w1000
    } else return '';
  }
}