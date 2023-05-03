import { PhotoCamera } from "@mui/icons-material";

const { Container, IconButton } = require("@mui/material")
const { default: ReactImageGallery } = require("react-image-gallery")

const Upl = ({OnSelectFiles})=>(<IconButton color="primary" aria-label="upload picture" component="label">
<input hidden accept="image/*" type="file" onChange={(evt)=>OnSelectFiles?.(evt.target.files)} />
<PhotoCamera />
</IconButton>)


const Photo = () => {
    const images = [
        // {
        //   original: 'https://picsum.photos/id/1018/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
        //   originalTitle: 'Imagem 1'
        // },
        // {
        //   original: 'https://picsum.photos/id/1015/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
        // },
        // {
        //   original: 'https://picsum.photos/id/1019/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
        // },
      ];
      
      const handleUpload = (arqs) => {
        console.log(arqs)
      } 

    return images.length == 0 ? (<Container fixed><Upl OnSelectFiles={handleUpload}></Upl></Container>) : (<Container fixed>
        <ReactImageGallery items={images} renderCustomControls={()=> (<Upl OnSelectFiles={handleUpload}/>)} />
        </Container>)
}

export default Photo;