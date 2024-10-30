const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
export const chatSession = model.startChat({
    generationConfig,
    history: [
    {
        role: "user",
        parts: [
        {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format"},
        ],
    },
    {
        role: "model",
        parts: [
        {text: "```json\n{\n  \"story_name\": \"The Boy Who Found Magic School\",\n  \"cover_image\": {\n    \"description\": \"A paper cut image of a young boy, with a curious expression, standing in front of a brightly colored, whimsical building with a sign that reads 'Magic School'. The building has towers and windows shaped like stars and moons. The boy is wearing a backpack and holding a book with a magical symbol on it. There are butterflies and clouds in the background, with a rainbow arching over the school.\",\n    \"style\": \"Paper cut\"\n  },\n  \"chapters\": [\n    {\n      \"chapter_title\": \"A Day Like No Other\",\n      \"description\": \"Oliver, a boy with a wild imagination, was bored. He dreamed of adventures, of magic, of things beyond the ordinary. Walking home from school, he passed a park, its familiar swings and slides seeming dull. He wished for something exciting, something different.\",\n      \"image\": {\n        \"description\": \"A paper cut image of Oliver, a young boy with brown hair and bright eyes, walking home from school. The sky is gray and the buildings around him are dull. He looks bored and lost in thought. There is a paper cut outline of a park in the background, with swings, a slide, and a sandbox. The overall tone of the image should be grey and uninteresting.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"chapter_title\": \"The Whispering Tree\",\n      \"description\": \"Suddenly, Oliver noticed a tree he'd never seen before. It was tall and ancient, its bark covered in strange symbols. As he approached, a gentle breeze rustled its leaves, whispering a secret in his ear. \\\"Magic School,\\\" it seemed to say, and a map appeared on the bark, showing a winding path leading to a wondrous building.\",\n      \"image\": {\n        \"description\": \"A paper cut image of Oliver standing in awe before a giant, ancient tree. The tree is covered in strange symbols, some glowing in different colors. The wind is blowing, rustling the leaves.  A paper cut map appears on the tree bark, showing a winding path leading towards a colorful, whimsical building. The image should be filled with a sense of wonder and mystery.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"chapter_title\": \"The Enchanted Doors\",\n      \"description\": \"Following the map, Oliver reached a magnificent building. It shimmered with colors, its windows shaped like stars and moons. A sign above the entrance read 'Magic School'.  He pushed open the doors, and a burst of light and laughter welcomed him. The air buzzed with magic.\",\n      \"image\": {\n        \"description\": \"A paper cut image of Oliver standing before the entrance of a magical school. The building is a vibrant blend of colors, with towers and windows shaped like stars and moons. The sign above the door reads 'Magic School' with a magical symbol next to it.  The door is open, revealing a bright, colorful interior with happy students and teachers. The image should capture the magic and wonder of the school.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"chapter_title\": \"Lessons of Magic\",\n      \"description\": \"Inside, Oliver met curious creatures, learned to make objects float, and discovered the power of imagination.  He studied with a friendly dragon who taught him about fire magic, and a mischievous fairy who showed him how to make things disappear.  Every day was a new adventure, filled with laughter and wonder.\",\n      \"image\": {\n        \"description\": \"A paper cut image of Oliver in the Magic School.  He is surrounded by magical creatures, including a friendly dragon, a mischievous fairy, and a playful unicorn. There are floating objects, books with glowing pages, and other magical elements. The image should convey a sense of joy, learning, and discovery.\",\n        \"style\": \"Paper cut\"\n      }\n    },\n    {\n      \"chapter_title\": \"The Power of Imagination\",\n      \"description\": \"Oliver realized that the real magic wasn't in spells and potions, but in his own imagination. He learned to believe in himself, to dream big, and to never stop exploring.  He left Magic School a changed boy, ready to share the magic he had found with the world.\",\n      \"image\": {\n        \"description\": \"A paper cut image of Oliver standing at the entrance of Magic School, looking back at the magical building with a smile. The sun is shining, and butterflies fly around him. He holds a magical book in his hand, and a small paper cut dragon sits on his shoulder. The image should convey a sense of hope, joy, and the power of imagination.\",\n        \"style\": \"Paper cut\"\n      }\n    }\n  ]\n}\n```"},
        ],
    },
    ],
});
