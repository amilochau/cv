import { IIcon, IList } from '../definitions/IList'

export interface IResumeCall {
  icon?: IIcon
  color?: string
  message: string
  description?: string
  lastUpdate?: string
}

export interface IResumeContact {
  text: string
  url: string
}

export interface IResumePersona {
  image: string
  thumbnail?: string
  name: string
  firstName?: string
  lastName?: string
  nationality?: string
  job?: string
  description?: string
  location?: string
  actions?: IList
  contact?: IResumeContact
}

export interface IResumeTopicItem {
  key: string
  title: string
}

export interface IResumeTopics {
  items?: IResumeTopicItem[]
}

export interface IResumeTag {
  label: string
  key: string
}

export interface IResumeProjects extends IList {
  tags?: IResumeTag[]
}

export interface IResumeExperienceItem {
  company?: string
  client?: string
  job: string
  place?: string
  placeUri?: string
  startDate: string
  endDate?: string
  description?: string
  missions?: IList
  tags?: IResumeTag[]
}

export interface IResumeExperiences {
  items?: IResumeExperienceItem[]
}

export interface IResumeTraining extends IList {
  alumni?: string
  languages: string[]
}

export interface IResumeChange {
  busy?: boolean
  isTrialPeriod?: boolean
  isDepartureNotice?: boolean
  changeLikelihoodInPercent?: number
  ongoingProcess?: boolean
  noticePeriodInDays?: number
  noticePeriodBufferInDays?: number
  isDepartureEndOfMonth?: boolean
}

export interface IResume {
  call?: IResumeCall
  persona?: IResumePersona
  topics?: IResumeTopics
  projects?: IResumeProjects
  experiences?: IResumeExperiences
  trainings?: IResumeTraining
  metrics?: IList
  change?: IResumeChange
}
