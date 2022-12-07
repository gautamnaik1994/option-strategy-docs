import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import AttributeCard from '@site/src/components/Attribute';
import AttributeGrid from '@site/src/components/AttributeGrid';
import Leg from '@site/src/components/Leg';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  attribute: AttributeCard,
  grid: AttributeGrid,
  leg:Leg
};