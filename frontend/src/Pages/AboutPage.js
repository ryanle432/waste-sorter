import Navbar from "../components/Navbar";
import "./../components_style/about_page_style.css";
import background_pic from "./../background_pictures/about_us_top.png"

function AboutPage() {
    return (
        <>
        <div>
            <Navbar />
                </div>
        <div className = "about">
        <div>
            <img src = {background_pic}>
            </img>
             </div>
             <div className = "aboutBottom">
            <h1>ABOUT US</h1>
            <p>
            Our exceptional team is comprised of talented individuals, including Vy Vo, Brandon Tran, Anthony Nguyen, and Ryan Le.
We are thrilled to participate in our final hackathon at UCR with CitrusHack 2023.
Our aim was to create a product that aligns with the themes of "New Frontiers", "Global Community", and "Sustainability".
Thus, we conceptualized an innovative solution - an automatic trash sorter, that leverages machine learning algorithms to categorize each item into its respective waste type, such as trash, plastic, paper, metal, cardboard, glass, or compost.
We utilized advanced technologies such as Raspberry Pi and Lobe to optimize the machine learning process.
Furthermore, we developed a sleek and user-friendly website using React on the frontend, that displays all the items in the trash can in real-time
            </p>
             </div>
            </div>
        </>
    )
}

export default AboutPage;