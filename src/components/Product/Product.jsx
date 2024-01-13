import './Product.css';

const Product = ({ product }) => {
    const generateLevel = (level) => {
        let levelText = '';
        for (let i = 0; i < level; i++) {
            levelText += '<span class="level-item level-blue"></span>';
        }
        const total = 5 - level;
        for (let i = 0; i < total; i++) {
            levelText += '<span class="level-item level-gray"></span>';
        }
        return  { __html: levelText };
    }

    return <div className="product">
        <div className="product-top">
            {product.new && !product.commingSoon ? <span className="badge">LANCAMENTO</span> : null}
            {product.commingSoon &&  !product.new ? <span className="badge">EM BREVE!!!</span> : null}
            <span className="skew"></span>
            <span className="level" dangerouslySetInnerHTML={generateLevel(product.level)}></span>
            <span className="image" style={{
                backgroundImage: product.assetImage ? `url(./assets/images/${product.image})` : `url(${product.image})`
            }} />

        </div>
        <div className="product-bottom">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-box-info">
                <img src={product.autorImage} alt="" />
                <span>
                    <h4>{product.autorName}</h4>
                    <h5>{product.autorProfission}</h5>
                </span>
            </div>
        </div>
        <a href={product.commingSoon ? "#" : product.link} target="_blank" className="link">ACESSAR</a>
    </div>
}

export default Product;