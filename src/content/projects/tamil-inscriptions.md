---
title: Reading Tamil script from stone
short: Stone inscriptions
kind: NLP course project, Linköping University
year: "2026"
order: 5
summary: I fine-tuned Qwen2.5-VL to read Tamili and Vattezhuthu, two extinct Tamil scripts, from images of stone inscriptions. It scored 95.4 BLEU on clean images and 63.0 on images made to look like worn stone.
image: /images/projects/tamil-stone.webp
imageAlt: A synthetic training image from this project, with Vattezhuthu text on a stone texture
imageFit: contain
repo: https://github.com/Vigneshwararaj-S/NLP-project
results:
  - figure: "95.4"
    text: BLEU on clean renderings of the scripts, the same kind of image the model trained on.
  - figure: "63.0"
    text: BLEU on the same text on simulated worn stone, a much harder test.
  - figure: "72.0"
    text: BLEU for the second model, which restores word boundaries.
  - figure: "~28k"
    text: Synthetic image-text pairs generated, because no labelled dataset exists.
stack: [Python, PyTorch, Qwen2.5-VL-3B, Qwen2.5-0.5B, QLoRA, Aksharamukha, Augraphy]
---

Tamil was once written in scripts that very few people can read today. Tamili and Vattezhuthu survive on stone, which is cracked and worn. Vision-language models have never seen them, and their tokenizers do not even contain the characters.

## Building the data

No labelled dataset exists, so I built one. I took Tamil text from Project Madurai and converted it to the ancient scripts with Aksharamukha. I then blended the text onto stone backgrounds and added erosion, lighting changes and surface noise with Augraphy.

## Two models, not one

One model doing both jobs converged poorly and did not fit in the 20 GB of GPU memory I had. So I split the work:

1. **Read the characters.** Qwen2.5-VL-3B, fine-tuned with QLoRA at 4-bit on a balanced set of 6,000 clean image-text pairs. I built a custom tokenizer with 5,000 sub-word units and added the new tokens to the model, unfreezing the embedding and output layers so it could learn them.
2. **Restore the words.** Ancient Tamil words fuse together with no spaces. A small Qwen2.5-0.5B model puts the boundaries back. Long inputs made it hallucinate, so I limited it to 15-word windows, which gave 25,611 training pairs.

## Testing it honestly

The clean score is an upper limit, because those images match the training data. The stone images were held back as the harder test. The drop from 95.4 to 63.0 BLEU shows the real cost of visual noise. These are simulated stones, so real inscriptions are still an open test.
