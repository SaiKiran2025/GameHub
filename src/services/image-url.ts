//optimize high resolution images keeping in mind of slow internet connections

const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
