import { ServiceItem, ProjectItem, TestimonialItem } from './types';

export const COMPANY_NAME = "Sullivan's Excavating";
export const COMPANY_PHONE = "(509) 936 2681";
export const COMPANY_EMAIL = "sullivanexcavatinginc@gmail.com";
export const COMPANY_ADDRESS = "PO Box 100 Valley, Washington 99181";
export const COMPANY_LICENSE = "WA LIC # SULLIEI815D5";
export const COMPANY_HOURS = "8:00 AM to 6:00 PM or until the job is done"

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Site Preparation',
    description: 'Complete site prep including clearing, grubbing, and leveling to ensure a solid foundation for your construction project.',
    iconName: 'Shovel'
  },
  {
    id: '2',
    title: 'Septic Systems',
    description: 'Certified installation and repair of residential and commercial septic systems, ensuring compliance with all local health codes.',
    iconName: 'Droplets'
  },
  {
    id: '3',
    title: 'Grading & Drainage',
    description: 'Precision grading to protect your property from water damage and ensure proper drainage flow away from structures.',
    iconName: 'TrendingDown'
  },
  {
    id: '4',
    title: 'Demolition',
    description: 'Safe and efficient demolition of structures, including debris removal and site cleanup ready for new development.',
    iconName: 'Hammer'
  },
  {
    id: '5',
    title: 'Driveways & Roads',
    description: 'Installation of durable gravel and stone driveways, private roads, and access paths built to withstand heavy loads.',
    iconName: 'Truck'
  },
  {
    id: '6',
    title: 'Utility Trenching',
    description: 'Expert excavation for water lines, electric, and sewer utilities with minimal disruption to the surrounding area.',
    iconName: 'Zap'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Commercial Site Prep',
    category: 'Commercial',
    imageUrl: '/assets/images/MVIMG_20200603_133202.jpg'
  },
  {
    id: '2',
    title: 'Residential Septic Install',
    category: 'Residential',
    imageUrl: '/assets/images/MVIMG_20200603_133225.jpg'
  },
  {
    id: '3',
    title: 'Highway Grading',
    category: 'Municipal',
    imageUrl: '/assets/images/0430201146c.jpg'
  },
  {
    id: '4',
    title: 'Old Barn Demolition',
    category: 'Demolition',
    imageUrl: '/assets/images/0305200729_HDR.jpg'
  },
  {
    id: '5',
    title: 'Luxury Driveway',
    category: 'Residential',
    imageUrl: '/assets/images/1126191330_HDR.jpg'
  },
  {
    id: '6',
    title: 'Utility Trenching',
    category: 'Commercial',
    imageUrl: '/assets/images/0428200854.jpg'
  },
  {
    id: '7',
    title: 'Backyard Leveling',
    category: 'Residential',
    imageUrl: '/assets/images/0127200904_HDR.jpg'
  },
  {
    id: '8',
    title: 'Foundation Dig',
    category: 'Commercial',
    imageUrl: '/assets/images/0220201126a_HDR.jpg'
  },
  {
    id: '9',
    title: 'Parking Lot Prep',
    category: 'Commercial',
    imageUrl: '/assets/images/0220201127_HDR.jpg'
  },
  {
    id: '10',
    title: 'Road Widening',
    category: 'Municipal',
    imageUrl: '/assets/images/0310201620a.jpg'
  },
  {
    id: '11',
    title: 'Concrete Removal',
    category: 'Demolition',
    imageUrl: '/assets/images/0428201406.jpg'
  },
  {
    id: '12',
    title: 'Pool Excavation',
    category: 'Residential',
    imageUrl: '/assets/images/0510201938.jpg'
  },
  {
    id: '13',
    title: 'Park Landscaping',
    category: 'Municipal',
    imageUrl: '/assets/images/0513200831_HDR.jpg'
  },
  {
    id: '14',
    title: 'Garden Grading',
    category: 'Residential',
    imageUrl: '/assets/images/1126191415a.jpg'
  },
  {
    id: '15',
    title: 'Structure Clearing',
    category: 'Demolition',
    imageUrl: '/assets/images/1203191216_HDR.jpg'
  },
  {
    id: '16',
    title: 'Warehouse Site',
    category: 'Commercial',
    imageUrl: '/assets/images/1210191332a_HDR.jpg'
  },
  {
    id: '17',
    title: 'Drainage System',
    category: 'Municipal',
    imageUrl: '/assets/images/6553263048.jpg'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    author: 'John Anderson',
    role: 'Homeowner',
    content: 'Sullivan\'s Excavating did a fantastic job on our new septic system. They were professional, timely, and left the site looking better than when they arrived.'
  },
  {
    id: '2',
    author: 'Sarah Jenkins',
    role: 'Project Manager, BuildRight Inc.',
    content: 'We rely on Sullivan for all our commercial site prep needs. Their attention to detail and safety standards are unmatched in the region.'
  },
  {
    id: '3',
    author: 'Mike Peterson',
    role: 'Local Developer',
    content: 'Honest pricing and incredible work ethic. They handled a difficult demolition project for us with ease. Highly recommended.'
  }
];
