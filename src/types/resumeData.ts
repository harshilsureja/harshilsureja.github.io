import {
  IContact,
  IEduction,
  IOtherSkill,
  IPersonalDetails,
  IPersonalProjects,
  ITechSkill,
  IWorkExperience,
} from './index';

export interface IData {
  data: {
    personalDetails: IPersonalDetails;
    education: IEduction;
    workExperience: IWorkExperience;
    personalProjects: IPersonalProjects;
    techSkill: ITechSkill;
    otherSkill: IOtherSkill;
    languages: string[];
    contactDetails: IContact[];
  };
}
