import './Product.css';

const Product = ({ product }) => {
    return <div>
        <div>
            {product.new && !product.commingSoon ? <span>LANCAMENTO</span> : null}
            {product.commingSoon &&  !product.new? <span>EM BREVE</span> : null}
            <span></span>
            <span></span>
        </div>
        <div>
            <h3>{product.name}</h3>
            <div>
                <img src="" alt="" />
                <h4>Autor</h4>
                <h5>Autor</h5>
            </div>
        </div>
        <a href="#">ACESSAR</a>
    </div>
}

export default Product;