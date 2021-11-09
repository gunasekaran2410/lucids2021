
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import './responsive.css'
function Faq() {
    return (
        <div className='background_site'>
            <Header/>
            <Container className='road_map'>
                <Row>
                    <Col>
                        <h5> 1. What is the total supply?</h5>
                        <p>There are 6666 Lucids in Season 1. 6600 are available for sale and 66 are locked away. </p><br></br>
                        <h5> 2. What are Locked Lucids?</h5>
                        <p>
                        Locked Lucids are 66 Lucids (1% of supply) that are locked for a period of 100 days to 6 months. After the lock period, these are airdropped to the best community members and random Lucids holders. 
                        </p><br></br>
                        <h5> 3. How many traits are present?</h5>
                        <p>Lucids NFTs are algorithmically generated based on 170 traits like expression, clothing, powers, and accessories.</p><br></br>
                        <h5> 4. Is there a whitelist?</h5>
                        <p>Yes, there are 2222 whitelist spots that get the opportunity to mint Lucids before the public sale. </p><br></br>

                        <h5> 5. How can I get a whitelist spot?​</h5>
                        <p>Whitelist spots can be earned by participating in our community activities. Keep an eye on the Discord and Twitter for more details</p>
                        <ul className='road_list'>
                            <li>
                                First 222 members to join our Discord channel - 222 spots</li>
                            <li>First 222 members to join our Twitter channel - 222 spots</li>
                            <li>
                            Discord invite leaderboard - 333 spots
                            </li>
                            <li>
                            Active community members on our social media channels - 333 spots
                            </li>
                            <li>
                            Sweepwidget - 790 spots
                            </li>
                            <li>
                            Surprise shill events and giveaways - 222 spots
                            </li>
                            <li>Lucky draw - 111 spots</li>
                        </ul>
                        <br></br>

                        <h5> 6. When is the launch?</h5>
                        <p>VIP Sale (2 hours): 666 Lucids  <br></br>
                         Whitelisted Presale (4 hours): 5934 Lucids  <br></br>
                         Public:  Lucids that are not minted in the whitelist sale will be available for the public</p>
                        <br></br>
                        <h5>7. What is Lucids Vault?</h5>
                        <p>Lucids Vault holds 30% of the sale proceeds. This will be used for funding our expansion activities, new hires, collabs, and more.</p><br></br>

                        <h5>8. How much does it cost to mint a Lucid? </h5>
                        <p>It costs 0.066 ETH + gas fees</p><br></br>

                        <h5>9. How many Lucids can I buy?</h5>
                        <p>Min buy/ wallet - 1 Lucid <br></br>
                        Max buy/ wallet - 10 Lucids
                        </p><br></br>
                        <h5>10. What can I do with Lucids NFTs?</h5>
                        <p>Each unique Lucid is your digital identity, your avatar, and your access to members-only privileges in the future.</p>
                        <br></br>
                        <h5>11. What is the future of the project?</h5>
                        <p>
                        The project is backed by an experienced and committed team, working to make this an established brand. We have set short-term and long-term milestones for us to achieve. We are exploring the possibilities of turning this into an animation series or a game where Lucids owners can monetize their unique NFTs (mentioned as “explore avenues for expansion of Lucids metaverse” on the roadmap). More details will be shared once things are finalized. Should this materialize, it will put this project in a whole different orbit! Fingers crossed!
                        </p><br></br>
                        <h5>12. Do I own the commercial rights of the Lucids I own?</h5>
                        <p>Yes, you do. If you own a Lucid you own all commercial rights associated with it. Feel free to use it to make the best out of your purchase.</p><br></br>

<br></br>
<h5>13. How can I get in touch with the team?

</h5>
                        <p>
                        This project is conceptualized and executed by the team at Pupa Labs. You can reach us at <u>www.pupalabs.com / info@pupalabs.com.</u>

</p><br></br>
                    </Col>
                </Row>
          </Container>
          <Footer/>
        </div>
    )
}
export default Faq;