import type { Schema, Struct } from '@strapi/strapi';

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'Experience';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummery: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'experience.experience': ExperienceExperience;
    }
  }
}
