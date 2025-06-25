import { Typography, Card, Col, Row } from 'antd';
import { useGetProductsQuery } from './productApi';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const ProductsList = () => {
  const { data, isError, isLoading } = useGetProductsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Xatolik yuz berdiku</h1>;
  console.log(data);

  return (
    <Row gutter={[32, 32]}>
      {data.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <Link to={`/products/${product.id}`}>
         <Card
  hoverable
  cover={
    <img
      alt={product.title}
      src={`https://source.unsplash.com/300x200/?product&sig=${product.id}`}

      style={{ height: '200px', objectFit: 'cover', overflow: 'hidden' }}
    />
  }
>
          {/* You can add more product details here if needed */}
         </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
