import "./../components_style/image_style.css"
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[index] = r(item); });
    return images;
  }
  

function DisplayImage(props) {
    console.log(props);
const directory = "testpictures";
const images = importAll(require.context(`./../testpictures`, false, /\.(png|jpe?g|svg)$/));


    //const des = './../testpictures';
    //const images = importAll(require.context('./../testpictures' , false, /\.(png|jpe?g|svg)$/));

    const imageElements = Object.keys(images).map((key) => (
        <img src={images[key]} alt={key} key={key} />
    ));

    return (
        <div>
            {imageElements}
        </div>
    );
}
    /*
    // Create an array of arrays, with each inner array containing up to 4 images
    const rows = [];
    let row = [];
    Object.keys(images).forEach((key) => {
        row.push({ key, image: images[key] });
        if (row.length === 4) {
            rows.push(row);
            row = [];
        }
    });
    if (row.length > 0) {
        rows.push(row);
    }

    // Create the HTML for the image rows and columns
    const htmlRows = rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
            {row.map((item) => (
                <div className="col" key={item.key}>
                    <img src={item.image} alt={item.key} />
                </div>
            ))}
        </div>
    ));

    return (
        <div className="container">
            {htmlRows}
        </div>
    );
    */

export default DisplayImage;






