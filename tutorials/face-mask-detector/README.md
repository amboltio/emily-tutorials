# Face Mask Detector  

[comment]: <> (The following demonstration shows how to easily get started using a Face Mask Detector, implemented in the Emily API template provided by the [Emily]&#40;http://ambolt.io/emily&#41; tool.)

This guide explains how to run an **AI model** which can detect whether a person is **wearing a face mask or not** using the Emily CLI. 

<div align="center">
<img src="https://github.com/amboltio/emily-cli/blob/main/tutorials/face-mask-detector/face-mask-detector-client/static/imgs/face_mask_detector.png" alt="Face Mask Detector" width="400" height="500"/>
</div>

## Prerequisites
1. This guide requires that you have [Emily](https://ambolt.io/emily-ai/).
Hence you must [download](https://github.com/amboltio/emily-cli/releases/latest) and [install](https://emily.ambolt.io/docs/latest/guides/install) it.


## Start the Face Mask Detector API
### Importing the Emily project API
1. Download the [emily tutorial files](https://github.com/amboltio/emily-tutorials).
	* You can either clone or download as a ZIP (remember to unzip)
2. Open a terminal and locate the `tutorials` folder
3. Run ```$ emily open ./face-mask-detector/face-mask-detector-api``` to import the Emily API project
	* **Note:** A common error on Mac is that Docker does not automatically allocate enough memory. To allocate more open Docker and go to ```Settings``` -> ```Resources``` (4 GB is recommended).
4. Choose the `Computer Vision` Emily image and select `PyTorch` as the deep learning platform
5. Accept the suggestions to add Python packages to the `requirements.txt` file of the project
6. Select Visual Studio Code as the editor to use

### Running the API
1. Open api.py and press `F5` or press the green _play_ icon in the top right 
	* This will host the API on port _4242_ if no other port was selected during `emily open`.
	* (Alternatively run ```$ python api.py``` in the Visual Studio Code terminal)

The face-mask-detector-api should now be hosting a FastAPI api on port 4242!
* You can check it on [http://localhost:4242/api/health](http://localhost:4242/api/health)
* You can also check the available API endpoints at [http://localhost:4242/docs](http://localhost:4242/docs)

## Start the Face Mask Detector Client
### Importing the Emily project Client
1. Open a new terminal and locate the `tutorials` folder
2. Run ```$ emily open ./face-mask-detector/face-mask-detector-client``` to import the Emily Client project
3. Choose the `Base` Emily image
4. Select Visual Studio Code as the editor to use
5. If we use the default port 4242 for the Face Mask Detector API in the above, Emily will report that the port is not available for use in this Face Mask Detector Client project. You might receive:
	* ```Emily: Do you want to change the port (currently 4242)? ```
	* Select *yes* and enter a new port, e.g. 4244

### Running the Client
1. Open main.py and press `F5` or press the green _play_ icon in the top right 
	* (Alternatively run ```$ python main.py``` in the Visual Studio Code terminal)
	

## Finally:
Your Face Mask detector client is now running in your browser.
- Go to http://localhost:4244/ (It might take a few seconds before the client is running)
- If you selected another port in step 6 of starting the Face Mask Detector Client, go to http://localhost:YOUR_PORT/