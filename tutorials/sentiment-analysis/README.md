# Sentiment Analysis 👍👎

This guide explains how run **sentiment analysis** on **movie reviews** using the Emily CLI.

<div align="center">
<img src="https://raw.githubusercontent.com/wiki/amboltio/emily-cli/images/demos/sentiment-analysis/sentiment-analysis-client.png" alt="Face Mask Detector" width="500" height="500"/>
</div>

## Prerequisites
1. This guide requires that you have [Emily](https://ambolt.io/emily-ai/).
Hence you must [download](https://github.com/amboltio/emily-cli/releases/latest) and [install](https://emily.ambolt.io/docs/latest/guides/install) it.

## Importing the Project
1. Download the [emily-cli repository files](https://github.com/amboltio/emily-cli).
	* You can either clone or download as a ZIP (remember to unzip)
2. Open a terminal and locate the `tutorials` folder
3. Run ```$ emily open ./sentiment-analysis/sentiment-analysis-api``` to import the Emily project
4. Choose the `Slim` Emily image with no deep learning platform
5. Select Visual Studio Code as the editor to use

## Running the API
1. Open api.py and press `F5` or press the green _play_ icon in the top right 
	* This will host the API on port _4242_
	* (Alternatively run ```$ python api.py``` in the Visual Studio Code terminal)
2. You can check it on [http://localhost:4242/api/health](http://localhost:4242/api/health)
* You can also check the available API endpoints at [http://localhost:4242/docs](http://localhost:4242/docs)

## Interacting with the API
### Launch the client
1. Go to `tutorials/sentiment-analysis/sentiment-analysis-client/`
2. Launch the `index.html` file
      * Your project is now running in your browser!
3. Write movie reviews and get a live sentiment analysis of them.

<!---
## Learn more 
Do you want to learn more on how the **Sentiment Analysis** is implemented Emily, check out this in-depth walkthrough:
- [Sentiment Analysis walkthrough](https://github.com/amboltio/emily-cli/wiki/Sentiment-analysis)
- Get more information on the [Emily Platform](https://ambolt.io/emily-ai/)
-->
