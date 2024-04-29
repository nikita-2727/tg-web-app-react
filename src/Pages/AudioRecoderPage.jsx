import AudioRecoder from '../components/AudioRecoder/AudioRecoder';

export default function AboutProductPage(props) {

    return (
        <div className='product-description'>
            <AudioRecoder indexProduct={props.indexProduct} />
        </div>
        
    )
}