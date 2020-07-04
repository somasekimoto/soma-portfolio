import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/hamilton.jpg'
import pic02 from '../images/pic02.jpg'
import thinky from '../images/thinky.png'
import golf from '../images/golf-searcher.png'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Profile</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>関本 宗真</h3>
          <p>1997年4月21日生まれ　　兵庫県出身</p>
          <p>2018年</p>
          <p>
            オーストラリアにワーキングホリデービザを取得して1年間滞在。プログラミングと出会い、独学で勉強を始める。
          </p>
          <p>
            2019年　大学を中退して、大阪に住み、カレー作りとプログラミング学習に勤しむ
          </p>
          <p>
            2020年　プログラミングスクールTECH CAMP（旧 TECH
            EXPERT）でプログラミング学習を本格化
          </p>
          <p>4月から、エンジニアとして就職するため、絶賛就活中</p>
          <p>
            スキル： HTML, CSS(Scss), JavaScript(jQuery, React.js, Gatsby),
            Ruby, Ruby on rails, Git(Github), Docker, AWS(EC2, S3, Lambda,
            DynamoDB, API Gateway, Amplify, Route53)
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Works</h2>
          <span className="image main">
            <img
              src="https://i.gyazo.com/31ac599b9e0235f9bc8428fbd45626f6.jpg"
              alt="Moyoshi"
            />
          </span>
          <h3>Moyoshi</h3>
          <p>
            プログラミングスクールに通い、初めて自力で制作したアプリケーションです。イベントや広告の掲示ができるアプリです。
          </p>
          <a></a>
          <hr></hr>
          <span className="image main">
            <img src={golf} alt="Golf Searcher" />
          </span>
          <h3>Golf Searcher</h3>
          <p></p>
          <hr></hr>
          <span className="image main">
            <img src={thinky} alt="Thinky" />
          </span>
          <h3>Thinky</h3>
          <p></p>
          {close}
        </article>

        {/* <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article> */}

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" data-netlify="true" name="soma-contact">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <p>As a Developer</p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/s_souma0421"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SomaSekimoto"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://qiita.com/soma_sekimoto">
                <span className="label">Qiita</span>
              </a>
            </li>
          </ul>
          <p>As a Person</p>
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/Soma.421/"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/soma.0421/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
