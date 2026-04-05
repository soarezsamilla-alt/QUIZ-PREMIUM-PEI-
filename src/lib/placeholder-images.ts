import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const SampleImages: ImagePlaceholder[] = data.sampleImages;
export const SampleImagesRow2: ImagePlaceholder[] = data.sampleImagesRow2;
export const BonusImages: ImagePlaceholder[] = data.bonusImages;
export const TestimonialImages: ImagePlaceholder[] = data.testimonialImages;
