import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Bar = () => {
    return (
        <div>
            <marquee behavior="fast" direction="left">
            <Container>
                <Row className='row'>
                    <Col><h6>BTC/NGN <span>-3.21%</span></h6>
                    <p>20,560.101.59NGN</p>
                    </Col>
                    <Col><h6>USDT/NGN <span>+10.20%</span></h6>
                    <p>453.44NGN</p>
                    </Col>
                    <Col><h6>ETH/NGN <span>+253%</span></h6>
                    <p>818,490.32NGN</p>
                    </Col>
                    <Col><h6>LTC/NGN <span>-3.21%</span></h6>
                    <p>81,002.32NGN</p>
                    </Col>
                    {/* <Col><h6>BTC/NGN <span>-3.21%</span></h6>
                    <p>20,560.101.59NGN</p>
                    </Col> */}
                </Row>
                </Container>
            </marquee>
        </div>
    )
}
