import styled from 'styled-components'

const HeroWrapper = styled.section`
    overflow: hidden;
    margin: 40px auto;
    margin-top: 250px;

    .carousel {

            position: relative;


            .carousel-control-prev {
                left: -85px;
            }


            .carousel-control-next {
                right: -85px;
            }


        a {

                height: 0%;
                position: absolute;
                top: 50%;


            img {

                color: #6F818F;
                padding: 15px;
                background: #FFFFFF;
                box-shadow: 0px 16px 24px rgba(115, 141, 163, 0.15);
                border-radius: 40px;
            }
        }
    }


    .card {
        border-radius: 32px;
        border: none;
        background: #F7F8FC;


        h1 {
            width: 100%;
            font-weight: bold;
            font-size: 3rem;
            line-height: 72px;
            color: #23272B;
            margin-left: 50px;

            span {
                color: #E93235;
            }
        }

        .btn {
            background: #E93235;
            padding: 12px 24px;
            border-radius: 8px;
            margin: 46px 0 0 50px;
            font-weight: 500;
            font-size: 1rem;
            line-height: 19px;
            color: #FFFFFF;
        }

        img {
            width: 100%;
            border-top-right-radius: 32px;
            border-bottom-right-radius: 32px;
        }
    }
`

export default HeroWrapper