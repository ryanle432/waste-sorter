const tf = require('@tensorflow/tfjs-node');
const Jimp = require('jimp');
const path = require('path');

function loadImage(path) {
  return new Promise((resolve, reject) => {
    Jimp.read(path, (err, image) => {
      if (err) {
        reject(err);
      } else {
        resolve(image);
      }
    });
  });
}

async function predict() {
  const image = await loadImage('./testpictures/carrot.jpg');
  const resizedImage = image.resize(224, 224);
  const buffer = await resizedImage.getBufferAsync(Jimp.MIME_JPEG);
  const tensor = tf.node.decodeImage(buffer);
  // Add a batch dimension to the tensor
  const batchedTensor = tensor.expandDims();
  const modelPath = path.resolve(__dirname, './model.json');
  const model = await tf.loadLayersModel(`file://${modelPath}`);
  const prediction = model.predict(batchedTensor);
  // Define class labels
  const labels = ['cardboard', 'compost', 'glass', 'metal', 'not trash', 'paper', 'plastic'];
  // Map predicted output to class labels
  const index = prediction.argMax(1).dataSync()[0];
  const label = labels[index];
  console.log(label);
}

predict();