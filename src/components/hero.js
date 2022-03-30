import { ClassNames } from "@emotion/react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";

import "./hero.css";
const Hero = () => {
  return (
    <div>
      <section head-section>
        <div className="heading ">
          <h1>Explore one-of-a-kind finds from independent makers</h1>
        </div>
        <div className="container">
          <ul className="types-img-sec row">
            <li class="main-list-item col-md col-sm col">
              <Link underline="none" component="button">
                <img
                  src="https://i.etsystatic.com/32269610/r/il/868b0d/3662445355/il_300x300.3662445355_1zji.jpg"
                  className="types-img"
                />
                <Typography paragraph>Wall art</Typography>
              </Link>
            </li>

            <li class="main-list-item col-md col-sm col">
              <Link underline="none" component="button">
                <img
                  src="https://i.etsystatic.com/21433228/r/il/3967dc/3554273629/il_300x300.3554273629_scc8.jpg"
                  className="types-img"
                />
                <Typography paragraph>Home And living</Typography>
              </Link>
            </li>

            <li class="main-list-item col-md col-sm col">
              <Link underline="none" component="button">
                <img
                  src="https://i.etsystatic.com/18954143/r/il/d21a9e/3066557243/il_300x300.3066557243_95wy.jpg"
                  className="types-img"
                />
                <Typography paragraph>Clothing</Typography>
              </Link>
            </li>

            <li class="main-list-item col-md col-sm col">
              <Link underline="none" component="button">
                <img
                  src="https://i.etsystatic.com/27771334/r/il/525dfd/3595404087/il_300x300.3595404087_kl6c.jpg"
                  className="types-img"
                />
                <Typography paragraph>Jwellery</Typography>
              </Link>
            </li>

            <li class="main-list-item col-md col-sm col">
              <Link underline="none" component="button">
                <img
                  src="https://i.etsystatic.com/30428590/r/il/350513/3579189586/il_300x300.3579189586_s9ej.jpg"
                  className="types-img"
                />
                <Typography paragraph>Wedding</Typography>
              </Link>
            </li>
            <li class="main-list-item col-md col-sm col">
              <Link underline="none" component="button">
                <img
                  src="https://i.etsystatic.com/27502657/r/il/34ea55/2915113681/il_300x300.2915113681_jqpd.jpg"
                  className="types-img"
                />
                <Typography paragraph>Sale</Typography>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="product">
        <Container>
          <h2>Popular gifts right now</h2>
          <div className="products">
            <div className="row">
              <div className="col-md col-sm col mt-5">
                <div className="card my-card">
                  <img
                    className="card-img-top  "
                    src="https://i.etsystatic.com/19311499/r/il/b4be61/1839533908/il_1588xN.1839533908_lgk6.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <Typography variant="button">
                      Anniversary Gift for Him,Personalized ...
                    </Typography>
                    <Typography>
                      &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
                      <span className="text-muted"> (5025)</span>
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="600">
                      &#8377; 2,120
                    </Typography>
                  </div>
                </div>
              </div>

              <div class="col-md col-sm col mt-5">
                <div class="card my-card">
                  <img
                    class="card-img-top  "
                    src="https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <Typography variant="button">
                      Dainty Name Necklace with Birt ...
                    </Typography>
                    <Typography>
                      &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
                      <span className="text-muted"> (2016)</span>
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="600">
                      &#8377; 2,120
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="col-md col-sm col mt-5">
                <div className="card my-card">
                  <img
                    className="card-img-top  "
                    src="https://i.etsystatic.com/10204022/c/2479/1970/243/466/il/ebecb4/2981833988/il_340x270.2981833988_6sg5.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <Typography variant="button">
                      Personalized Name Necklace by ...
                    </Typography>
                    <Typography>
                      &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
                      <span className="text-muted"> (1055)</span>
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="600">
                      &#8377; 1,560
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="col-md col-sm col mt-5">
                <div className="card my-card">
                  <img
                    className="card-img-top  "
                    src="https://i.etsystatic.com/27890741/r/il/9a051c/3412471944/il_1588xN.3412471944_tcbv.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <Typography variant="button">
                      Heart Keychain Set - Made with Authen...
                    </Typography>
                    <Typography>
                      &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
                      <span className="text-muted"> (21905)</span>
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="600">
                      &#8377; 1,920
                    </Typography>
                  </div>
                </div>
              </div>

              <div class="col-md col-sm col mt-5">
                <div class="card my-card">
                  <img
                    class="card-img-top  "
                    src="https://i.etsystatic.com/32094682/c/3000/2384/0/512/il/d47b05/3421788688/il_340x270.3421788688_4qwn.jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <Typography variant="button">
                      Personalized Name Necklace with Bir...
                    </Typography>
                    <Typography>
                      &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
                      <span className="text-muted"> (1032)</span>
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="600">
                      &#8377; 1,670
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
