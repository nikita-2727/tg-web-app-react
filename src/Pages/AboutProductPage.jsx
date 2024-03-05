import DescriptionProduct from '../components/DescriptionProduct/DescriptionProduct';

export default function AboutProductPage(props) {
    return (
        <div className='product-description'>
            <DescriptionProduct productProps={props.productProps}/>
        </div>
        
    )
}