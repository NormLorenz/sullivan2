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
    description: 'Prepare a level building site for construction including road building, land clearing, demolition of existing structures/obstacles, earthmoving and/or drainage.',
    iconName: 'Map'
  },
  {
    id: '2',
    title: 'Foundation Excavation',
    description: 'Dig an area suitable for basements, crawlspaces and/or foundations in preparation for laying concrete forms.',
    iconName: 'Home'
  },
  {
    id: '3',
    title: 'Demolition',
    description: 'Knock down single family dwellings, multi-family housing and/or commercial buildings. Remove demolition material and backfill area to provide a clean level space.',
    iconName: 'Hammer'
  },
  {
    id: '4',
    title: 'Utility Trenching',
    description: 'Notifiy utilities and obtain necessary permits before trenching for water lines, sewer lines, hookups, water drainage pipes and/or catch basins.',
    iconName: 'Zap'
  },
  {
    id: '5',
    title: 'Land Clearing',
    description: 'Provide qualified, experienced and affordable tree and stump removal.',
    iconName: 'Trees'
  },
  {
    id: '6',
    title: 'Finish Grading',
    description: 'Dress up your site around new and existing homes to provide that professional appearance. Apply top soil based upon customer requirements.',
    iconName: 'Ruler'
  },
  {
    id: '7',
    title: 'Driveways',
    description: 'Build roads and driveways in difficult site and soil conditions ready for vehicular traffic. Overlay and pack with gravel as necessary.',
    iconName: 'Truck'
  },
  {
    id: '8',
    title: 'Erosion Control',
    description: 'Apply silt fence installation, french drains and positive drainage systems.',
    iconName: 'ShieldAlert'
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
  },
  {
    id: '4',
    author: 'Pat Lowery - Deer Lake',
    role: 'Contractor',
    content: 'We have used Sullivan Excavating for several jobs ranging from building site preparation to road construction. Each time the work has met or exceeded our expectation, was completed within the identified time constraints and as well as the cost estimates initially provided. We will continue to use their services and won’t hesitate to recommend them when asked!'
  },
  {
    id: '5',
    author: 'Donna Busch - Loon Lake',
    role: 'Home Owner',
    content: 'Our yard looks amazing. Even our neighbors are excited. He treated us how he would want someone to treat his own family. He\'s amazing. Thanks'
  },
  {
    id: '6',
    author: 'Robyn Deaton - Seattle',
    role: 'Home Owner',
    content: 'Erin Sullivan is a life saver. When I called him about an emergency sewer leak he came right over and did a fantastic job of repairing it. So when I had an emergency water leak I called him and once again he came right out and explained what I needed to do and was able to fix it the next day. I highly recommend him!'
  }
];
