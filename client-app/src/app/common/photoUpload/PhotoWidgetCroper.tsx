import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import React, { useRef } from 'react'

interface IProps {
    setImage: (file: Blob) => void;
    imagPreview: string
}

const PhotoWidgetCroper: React.FC<IProps> = ({ setImage, imagPreview }) => {
    const croper = useRef<Cropper>(null);
    const cropImage = () => {
        if (croper.current && typeof croper.current.getCroppedCanvas() === 'undefined') {
            return;
        }
        croper &&
            croper.current &&
            croper.current.getCroppedCanvas().toBlob((blob: any) => {
                setImage(blob)
            }, 'inage/jpeg')
    }
    return (
        <Cropper
            ref={croper}
            src={imagPreview}
            style={{ height: 200, width: '100%' }}
            // Cropper.js options
            aspectRatio={1 / 1}
            preview='.img-preview'
            guides={false}
            viewMode={1}
            dragMode='move'
            scalable={true}
            cropBoxMovable={true}
            cropBoxResizable={true}
            crop={cropImage}
        />
    )
}

export default PhotoWidgetCroper;
