export const home = (req, res) => res.send("home");
//pug파일을 사용하는 방법으로 res.send -> res.render("파일명")

export const search = (req, res) => res.send("search");

export const upload = (req, res) => res.send("upload");
export const videoDetail = (req, res) => res.send("videoDetail");
export const editVideo = (req, res) => res.send("editVideo");
export const deleteVideo = (req, res) => res.send("deleteVideo");