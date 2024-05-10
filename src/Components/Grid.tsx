import React, { Component } from 'react'
import './Grid.css'
import poet from '../assets/Poet.jpg'
import wiki from '../assets/icons8-wikipedia-64.png'
import yt from '../assets/youtube.png'
import amz from '../assets/icons8-amazon-64.png'
import star from '../assets/star.png'

interface Props {

}
interface State {

}
class Grid extends Component<Props, State> {
    render() {
        return <div className='body'>
            <div className='tag1'>
                <ul className='nav-tag'>
                    <li><a href="#home" className='nav-tag-li'>Home</a></li>
                    <li><a href="#about" className='nav-tag-li'>About</a></li>
                    <li><a href="#achiv" className='nav-tag-li'>Achievement</a></li>
                </ul>

                <div className='head-name'>

                    <h1 className='head-h1'>Kazi Nazrul Islam</h1><br />
                    <h3 className='head-h3'>The National Poet of Bangladesh</h3>

                </div>
            </div>

            <div className='tag2'>
                <div className='tag2-cmn'>
                    <div className='tag2-para-cmn'>
                        <div className='tag2-para1'>
                            <h2 className='tag2-h1 ' id='about'>Rabel Poet</h2>
                            <p className='tag2-para'>
                                Kazi Nazrul Islam is the national poet of Bangladesh who is
                                especially recognized as a Bidrohi Kobi (rebel poet) around the
                                country. Nazrul is a famous poet, musician and philosopher of
                                Bangladesh. The famous poet Nazrul's writings deal with the
                                revolution of that period of the British government. His
                                revolutionary attempt helped him to be a national poet of
                                Bangladesh. He has raised his voice against any kinds of fascism and
                                oppression and got popularity swiftly around the Indian
                                Subcontinent.
                            </p>
                        </div>
                        <div className='tag2-para1 tag2-para2'>
                            <h2 className='tag2-h1'>Awsome Writer</h2>
                            <p className='tag2-para'>
                                Nazrul's writings explored themes such as love, freedom, humanity,
                                and revolution. He opposed all forms of bigotry and
                                fundamentalism, including religious, caste-based and gender-based.
                                Throughout his career, Nazrul wrote short stories, novels, and
                                essays but is best known for his songs and poems. He pioneered new
                                music forms such as Bengali ghazals. Nazrul wrote and composed
                                music for nearly 4,000 songs (many recorded on HMV and
                                gramophone records), collectively known as Nazrul Geeti.
                            </p>
                        </div>

                    </div>
                    <div className='img'>
                        <img src={poet} className='poet-img'></img>
                    </div>
                </div>
                <div className='icon-cmn'>
                    <><img src={wiki} className='wiki-img'></img><span className='wiki-para'>Learn More</span></>
                    <><img src={yt} className='yt-img'></img><span className='yt-para'>Videos</span></>
                    <><img src={amz} className='amz-img'></img><span className='amz-para'>Books</span></>
                </div>
                <h3 className='tag2-para3'>"Love has no meaning or amount." - Kazi Nazrul Islam</h3>
            </div>

            {/* section -3 */}

            <div>
                <div className='sec3'>

                    <span className='sec3-hr' id='achiv'><hr></hr>
                    <img src={star} className='img-star' height={40}></img>
                        <span className='sec3-award1'> Awards</span><hr></hr>
                    </span>
                </div>

                <div className='sec3-cmn'>
                    <div className='sec3-cmn1'>
                        <div className='sec3-gd1'>
                            <h1 className='sec3-h1'>Jagattarini Gold Medal</h1>
                            <p className='sec3-yr'>1945</p>
                            <p className='sec3-para'>
                                From the University of Calcutta for his work in Bengal Literature.
                            </p>
                        </div>

                        <div className='sec3-gd1'>
                            <h1 className='sec3-h1'>Padma Bhusan</h1>
                            <p className='sec3-yr'>1960</p>
                            <p className='sec3-para'>
                                One of the highest civilian honors of the Republic of india.
                            </p>
                        </div>

                        <div className='sec3-gd1'>
                            <h1 className='sec3-h1'>National Poet</h1>
                            <p className='sec3-yr'>-</p>
                            <p className='sec3-para'>
                                Confered the title by the Government of Bangaladesh.
                            </p>
                        </div>

                        <div className='sec3-gd1'>
                            <h1 className='sec3-h1'>Ekushey Padak</h1>
                            <p className='sec3-yr'>1976</p>
                            <p className='sec3-para'>Bangladesh's highest civilian honours.</p>
                        </div>
                    </div>

                    <div className='sec3-last'>
                        <div className='sec3-last-cmn'>
                            <div className='sec3'>

                                <span className='sec3-hr1'><hr></hr>
                                    <span className='sec3-award poem'>Poetry</span><hr></hr>
                                </span>
                            </div>
                            <div className='sec3-last-ul sec3-word'>
                                <ul className='sec3-last-div'>
                                    <li className='sec3-last-div-li'> Agri Bina (The Flery Lute), 1922</li>
                                    <li className='sec3-last-div-li'> Sanchita (Collected poems), 1925</li>
                                    <li className='sec3-last-div-li'> Phanimanasa (The Cactus), 1927</li>
                                    <li className='sec3-last-div-li'> Chakrabak (The Flamingo), 1929</li>
                                    <li className='sec3-last-div-li'> Satbhai Champe (The Seven Brothers of Champa), juvenile poems, 1933</li>
                                    <li className='sec3-last-div-li'> Nirjhar (Fountain), 1939</li>
                                    <li className='sec3-last-div-li'> Natun Chand (The New Moon), 1939</li>
                                    <li className='sec3-last-div-li'> Morubhaskar (The Sun in the Desert), 1951</li>
                                    <li className='sec3-last-div-li'> Sanchayan (Collected Poems), 1955</li>
                                    <li className='sec3-last-div-li'> Nazrul Islam: Islami Kobita (A Collection of Islamic Poems; Dhaka, Bangladesh Islamic Foundation, 1982)</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='sec3'>

                                <span className='sec3-ht'><hr></hr>
                                    <span className='sec3-award poem'>Poems and Songs</span><hr></hr>
                                </span>
                            </div>
                                    
                            <div>
                                <ul className='sec3-last-div sec3-word'>
                                    <li className='sec3-last-div-li'> Dolan Chapa (nama of a faintly fragrant monsoon flower), 1923</li>
                                    <li className='sec3-last-div-li'> Bisher Bashi (The Poison Flute), 1924</li>
                                    <li className='sec3-last-div-li'> Bhangar Gan (The Song of Destruction). 1924 proscribe in 1924</li>
                                    <li className='sec3-last-div-li'> Chhayanat (The Raga of Chhayanat), 1925</li>
                                    <li className='sec3-last-div-li'> Chittanama (On Chittaranjani), 1925</li>
                                    <li className='sec3-last-div-li'> Samyabadi (The Procialmer of Equality), 1926</li>
                                    <li className='sec3-last-div-li'> Puber Hawa (The Eastern Wind), 1926</li>
                                    <li className='sec3-last-div-li'> Sarbahara (The Proletariat), 1926</li>
                                    <li className='sec3-last-div-li'> Sindhu Hindol (The Undulation of the Sea), 1927</li>
                                    <li className='sec3-last-div-li'> Jinjir (Chain), 1928</li>
                                    <li className='sec3-last-div-li'> Pralaya Shilcha (Doomsday Flame), 1930 proscribed in 1930 Shesh Saogat (The Last Offerings), 1958</li>
                                    <li className='sec3-last-div-li'> Shesh Saogat(The Last Offerings),1958</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='sec3-footer'>
                    <div className='sec3-footer-cmn'>
                        <h2 className='footer-h2'>About the author</h2>
                        <p className='footer-para'>Made by <span className='grey'>Md.Abu Taher</span> for a Freecodecamp tribute challenge</p>
                       
                    </div>
                    <div><hr className='hr-tag'></hr></div>
                    <div className='sec3-footer-cmn'> 
                        <h2 className='footer-h2'>Techs Used</h2>
                        <p className='footer-para'>Semantic UI</p>
                    </div>

                    <div><hr className='hr-tag'></hr></div>

                    <div className='sec3-footer-cmn'>
                        <h2 className='footer-h2'>Content Disclaimer</h2>
                        <p className='footer-para'>
                            The content of this is mostly copied from <span className='blue'>
                                Wikipedia,BlographyBD, Thefamouspeople
                            </span>. Original credits goes to the respective authors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Grid;