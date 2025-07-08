# LinguaFree Chrome Extension

A free Chrome extension inspired by Trancy and languagereactor that helps you save vocabulary and sentences from YouTube captions with an integrated learning mode.

## Features

✨ **Vocabulary Saving**: Click on words in YouTube captions to save them
📝 **Sentence Extraction**: Select and save complete sentences from captions
📚 **Learning Mode**: Interactive flashcard-style learning with progress tracking
📊 **Statistics**: Track your learning progress with detailed stats
🎯 **Smart Highlighting**: Visual indicators for interactive caption elements
🔄 **Data Export/Import**: Backup and restore your vocabulary data
⚡ **Lightweight**: No external dependencies, works completely offline

## Installation

### Method 1: Load as Unpacked Extension (Recommended)

1. **Download the Extension Files**

   - Save all the provided files in a folder called `vocablearner-extension`
   - You should have these files:
     - `manifest.json`
     - `content.js`
     - `popup.html`
     - `popup.js`
     - `styles.css`
     - `background.js`
     - `README.md`

2. **Create Extension Icons** (Optional but recommended)

   - Create simple PNG icons or use placeholder images:
   - `icon16.png` (16x16 pixels)
   - `icon48.png` (48x48 pixels)
   - `icon128.png` (128x128 pixels)

3. **Load the Extension**

   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `vocablearner-extension` folder
   - The extension should now appear in your extensions list

4. **Pin the Extension**
   - Click the puzzle piece icon in Chrome's toolbar
   - Find "VocabLearner" and click the pin icon to keep it visible

## How to Use

### Saving Vocabulary from YouTube

1. **Go to any YouTube video**
2. **Activate LinguaFree** by clicking the floating "📚 LinguaFree" button that appears in the top-right corner
3. **Save Words**: Click on individual words in the captions
4. **Save Sentences**: Select (drag to highlight) complete sentences from captions
5. **Manage Collection**: Click the extension icon to view your saved vocabulary

### Learning Mode

1. **Open the Extension Popup** by clicking the VocabLearner icon in the toolbar
2. **Navigate to "Learn" tab**
3. **Click "Start Learning"** to begin flashcard-style practice
4. **Mark Progress**: Use "I Know This" or "Don't Know" buttons to track your progress
5. **Complete Sessions**: Work through your entire vocabulary collection

### Extension Interface

The popup has 4 main sections:

- **Dashboard**: Overview of your vocabulary statistics
- **Words**: Manage your saved words
- **Sentences**: Manage your saved sentences
- **Learn**: Interactive learning mode with flashcards

## File Structure

```
vocablearner-extension/
├── manifest.json          # Extension configuration
├── content.js            # YouTube page interaction
├── popup.html            # Extension popup interface
├── popup.js              # Popup functionality
├── styles.css            # YouTube page styling
├── background.js         # Background service worker
├── icon16.png            # Small icon (optional)
├── icon48.png            # Medium icon (optional)
├── icon128.png           # Large icon (optional)
└── README.md             # This file
```

## Troubleshooting

### Extension Not Loading

- Make sure all files are in the same folder
- Check that `manifest.json` is properly formatted
- Ensure Developer mode is enabled in Chrome

### Not Working on YouTube

- Refresh the YouTube page after installing
- Check that the extension has permission for YouTube
- Look for the floating VocabLearner button in the top-right corner

### Data Not Saving

- Check Chrome's storage permissions
- Try disabling and re-enabling the extension
- Clear extension data and restart Chrome

### Captions Not Highlighted

- Ensure YouTube captions are turned on
- Try refreshing the page
- Check that VocabLearner is activated (button should be green)

## Privacy & Security

- **No Data Collection**: All data stays on your device
- **No Internet Required**: Works completely offline
- **No Tracking**: No analytics or user tracking
- **Local Storage**: Uses Chrome's local storage API

## Keyboard Shortcuts

You can add these to `manifest.json` if desired:

```json
"commands": {
  "toggle-vocab-mode": {
    "suggested_key": {
      "default": "Ctrl+Shift+V"
    },
    "description": "Toggle vocabulary mode"
  }
}
```

## Development

### To Modify the Extension

1. **Edit the Files**: Make changes to any of the source files
2. **Reload Extension**: Go to `chrome://extensions/` and click the refresh button
3. **Test Changes**: Visit YouTube and test the functionality

### Adding New Features

- **Content Script** (`content.js`): Modify YouTube page behavior
- **Popup** (`popup.html`, `popup.js`): Change the extension interface
- **Background** (`background.js`): Add new background functionality
- **Styles** (`styles.css`): Update the visual appearance

## Contributing

This is a free, open-source project. Feel free to:

- Report bugs
- Suggest improvements
- Add new features
- Share with others

## License

Free to use and modify. No warranty provided.

## Support

For issues or questions:

1. Check the troubleshooting section
2. Verify all files are correctly placed
3. Try reloading the extension
4. Check Chrome's developer console for errors

---

**Enjoy learning vocabulary from YouTube! 📚✨**
