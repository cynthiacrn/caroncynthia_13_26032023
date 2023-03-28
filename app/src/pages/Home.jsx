import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import BankTreeLogo from '../assets/images/bank-tree.jpeg'
import ChatIcon from '../assets/images/icon-chat.png'
import MoneyIcon from '../assets/images/icon-money.png'
import SecurityIcon from '../assets/images/icon-security.png'

function Home() {
  return (
    <>
      <Navigation />

      <main>
        <div className="hero" style={{ backgroundImage: `url(${BankTreeLogo})` }}>
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>

        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
            <img src={ChatIcon} alt="Chat Icon" className="feature-icon"/>
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <img
              src={MoneyIcon}
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <img
              src={SecurityIcon}
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
