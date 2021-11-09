import { Row, Col, Container, Image } from 'react-bootstrap';
import './App.css';
import toy from '../src/assets/img/toy.png'
import './responsive.css'
import Header from './components/Header';
import Footer from './components/Footer';

function RoadMap() {
    return (
        <div className='background_site'>
            <Header/>
 <Container className='content_section road_map'>
        <Row>
          <Col md={2}>
            <div className='road text-right'> <span> LAUNCH  </span> <span className='inner_padding'></span> <span>ROADMAP</span>
</div>
          </Col>
                    <Col md={10}>
                    <h5> 10% THEY'RE LOVIN' IT!​</h5>
                        <p>     
                            The Lucids are amused by the metaverse. They now understand why the mere mortals refuse to go back to the physical world. 6 new Lucids are released into the metaverse and we help them find their companions! 
                           <br></br> _____ added to Lucids Vault
                        </p>
                        <h5> 25% AND THEY HAVE FAVOURITES!
​</h5>
                        <p>     
                        The Lucids have spotted 6 companions worthy enough to travel with them in the future. The 6 lucky ones gain guaranteed priority access to the next season of Lucids.
                           <br></br> _____ added to Lucids Vault
                        </p>
                        <h5> 50% UMMM, AM I LOST?


​</h5>
                        <p>     
                        1 Lucid with a super rare power has lost his companion’s address. We know where he might just be! Check your wallets to know if you’re the lucky one!
                           <br></br> _____ added to Lucids Vault
                        </p>
                        <h5> 100% THE GRAND PLAN</h5>
                        <p>     
                        All Lucids have successfully entered the metaverse. We give them a few days to chill in their new homes and let them work their magic to save the world.
                           <br></br> _____ added to Lucids Vault
            </p>
        
          </Col>
                </Row>
                <br></br>
                <hr></hr>
            </Container>
            <Container className='content_section road_launch'>
            <Row>
                    
                    <Col md={10}>
                        
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td className='text-center'>
<Image src={toy} width={100} />
                                    </td>
                                    <td>
                                        <h5> WITHIN 66 DAYS​</h5>
                                        <ul className='road_list'>
                                            <li>
                                            Integrate Lucids data to Rarity.tools
                                            </li>
                                            <li>
                                            Free Limited edition special NFT airdrop to holders
                                            </li>
                                            <li>
                                            Explore avenues for expansion of Lucids metaverse
                                            </li>
                                            <li>
                                            Community artist collabs 
                                            </li>
                                            <li>
                                            Roll out our post-launch marketing plans
                                            </li>
                                    </ul>
                                        </td>
                                </tr>

                                <tr>
                                    <td className='text-center'>
<Image src={toy} width={100} />
                                    </td>
                                    <td>
                                        <h5> WITHIN 166 DAYS​</h5>
                                        <ul className='road_list'>
                                            <li>
                                            Unleash Locked Lucids. 66 nos or 1% of Lucids which have been locked away find their companions.
                                            </li>
                                            <li>
                                            Lucids Lounge - A digital lounge to spend time and chill with other Lucids on the metaverse
                                            </li>
                                            <li>
                                            Season 2 Teaser
                                            </li>
                                            <li>
                                            Collaboration with Celebrity artists and influencers
                                            </li>
                                    </ul>
                                        </td>
                                </tr>
                                <tr>
                                    <td className='text-center'>
<Image src={toy} width={100} />
                                    </td>
                                    <td>
                                        <h5> WITHIN 266 DAYS​</h5>
                                        <ul className='road_list'>
                                            <li>
                                            Merch store goes live. 
                                            </li>
                                            <li>
                                            Each Lucid gets a special companion in Season 2.
                                            </li>
                                            <li>
                                            Season 2 Launch 
                                            </li>
                                            <li>
                                            Lucids metaverse expands and evolves with the number of Lucids reducing each season
                                            </li>
                                            <li>
                                            Collabs with other successful projects
                                            </li>
                                    </ul>
                                        </td>
                                </tr>

                            </tbody>
                        </table>

                  
                        
                    </Col>
                    <Col md={2}>
            <div className='road text-right'> <span> THE  </span> <span className='inner_padding'></span> <span>ROADMAP</span>
</div>
          </Col>
                </Row>
              
            </Container>
         <Footer/>
        </div>
    )
}

export default RoadMap;