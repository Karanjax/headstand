import * as Yup from "yup";
import { InstructorInitialValue, InstructorListData } from "@/Type/Application/InstructorList/InstructorList";

export const instructorData: InstructorListData[] = [
  {
    id: 1,
    title: "Studio Owner",
    name: "Janette Brown",
    image: "janette-brown.jpg",
    certifications: "RYT 500",
    description: "Janette was born in New York where she ignited her passion for dance, and grew up in Sarasota appreciating the arts it offered. She graduated from Riverview High School, then attended State College of Florida where she received an Associates of Arts in Theatre. Still uncertain of her future, Janette pursued a career in Fashion at IADT while working at Saks 5th Avenue and after 15 years with Victoria's Secret and Express. Thankfully, after years of stressful jobs, taking care of two small children, while going through a difficult divorce she found yoga. She decided to attend Heartwood Yoga Institute for the RYT 200 hour certification which turned into as many hours, certifications, and workshops she could get. This forever yoga student learned that there was so much more to yoga than the physical practice, that we are all growing and searching for enlightenment and that yoga opened the door to physical, mental, and spiritual unity. She hopes to instill the value of yoga to her children Avery and Arden and has the love and support of her life partner Ryan through her journey.",
    specialties: "Reiki Master, Certified in Aerial, Children's Yoga, Yin Yoga, Restorative, Spin, HIIT",
  },
  {
    id: 2,
    title: "Instructor",
    name: "Vince Hulsman",
    image: "vince.jpg",
    certifications: "RYT 200",
    description: "After attending my first yoga class I was so deeply moved, I knew then I wanted to share that feeling with others.  If I am able to share that same feeling with even just one other person a part of my journey will have been completed. A semi-native to FL and 4.5-year resident of Sarasota.  A very proud Father of a daughter and son.  A classically trained Chef become IT Engineer.  And lifelong student.  I have a passion for travel, having been from Fairbanks, AK to Oranjestad, AA and from Cabo san Lucas, MX to Paris, FR.  Seeing all places in between.  I love the water and can usually be found with my toes in the sand. I have learned that the time I spend on my mat is lifes maintenance.  It is what allows me to remain focused on the road ahead.  Calling on my breath to bring balance to mind and body.",
    specialties: "Reiki Master, Certified in Aerial, Children's Yoga, Yin Yoga, Restorative, Spin, HIIT",
  },
  {
    id: 3,
    title: "Instructor",
    name: "Emma Dasco",
    image: "Emma.jpg",
    certifications: "RYT 200",
    description: "Emma found yoga in high school as an alternative to her background in competition dance. She went on to complete her 200-hour yoga teacher training in 2016 at The Yoga Place in Canton, Ohio; she has been teaching ever since. She has experience teaching everything from warm power vinyasa to gentle yoga classes. Yoga is now a non-negotiable aspect of her wellness and lifestyle. Emma graduated from the University of North Carolina at Asheville in 2021 with a major in Health and Wellness Promotion. She is a certified Holistic Health Coach and Plant-Based Nutritionist. As a comprehensive practice of unification, Emma's classes will incorporate creative sequencing, yogic philosophy, and breath, all centered around music. Expect to tap into the holistic qualities of yoga during her classes as you leave feeling balanced in your mind, body, and spirit.",
    specialties: "",
  },
  {
    id: 4,
    title: "Instructor",
    name: "Allison Pratcher",
    image: "allison.jpg",
    certifications: "LMT, RYT 200",
    description: "Allison is known for her authentic, non-judgmental teaching style and compassion-centered philosophy. Her truth and genuine spirit provides you space to 'let go' and encouragement to be unapologetically yourself, and learn to LOVE the person you are. In a room full of people, It seems as Allison is speaking directly to you, It’s like she intuitively KNOWS what your soul needs, her energy and love for others is undeniable. Allison has been inspired by many forms of movement, BUTI yoga, and Kundalini are some of the principles she incorporates in her classes. Allison's professional training consists of a 200 hour, Registered Yoga Teacher Certiﬁcation, and extra training in buti-yoga. She is also a licensed massage therapist, doula-trained and holds certifications in alternative medicine, global healing, and nutritional health. With her Yoga:diverse wellness knowledge, there is a lot you can learn from her. Come to class with an open mind, and leave with an open heart.",
    specialties: "",
  },
  {
    id: 5,
    title: "Instructor",
    name: "Joanna (Joey) Rettler",
    image: "joey.jpeg",
    certifications: "RYT 500",
    description: "Joey is a New England native from Massachusetts. Joey is a graduate of Clark University with a Bachelor's Degree in Fine Arts & Education. Art and teaching have been longtime passions. With a quench for more learning, Joey earned a Master's Degree in Education in 2003. Her pursuit of teaching led her to an aerospace company in Connecticut where she was a Health & Safety Specialist and Ergonomics Team Lead/Educator. Five years ago, she decided to leave her corporate career in Connecticut in pursuit of her true passion – Photography. After arriving in Florida in 2017, Joey dealt with the unexpected loss of her spouse. This led her to begin a journey into yoga and healing. After taking her first Restorative Class, she experienced a great release and the ability to let go. Joey knew that she wanted to share this feeling with others. After completing the first 200 hours of training, Joey could not wait to dive deeper into the next 300 hours of advanced training. She holds certifications in specialties such as Reiki, Sound Healing and specific yoga practices has further enhanced her passion to share yoga and sound healing with others. When Joey is not on the mat you will find her at the YMCA working out, hanging with her 3 year-old Bichon, Maya, spending time with her family and friends, and capturing moments through her photo lens.",
    specialties: "Reiki Master, Sound Healer, Certified in Restorative, Chair, and Yin Yoga",
  },
  {
    id: 6,
    title: "Instructor",
    name: "Pradnya Deshpande",
    image: "pradnya.jpeg",
    certifications: "YTT 500",
    description: "Joey is a New England native from Massachusetts. Joey is a graduate of Clark University with a Bachelor's Degree in Fine Arts & Education. Art and teaching have been longtime passions. With a quench for more learning, Joey earned a Master's Degree in Education in 2003. Her pursuit of teaching led her to an aerospace company in Connecticut where she was a Health & Safety Specialist and Ergonomics Team Lead/Educator. Five years ago, she decided to leave her corporate career in Connecticut in pursuit of her true passion – Photography. After arriving in Florida in 2017, Joey dealt with the unexpected loss of her spouse. This led her to begin a journey into yoga and healing. After taking her first Restorative Class, she experienced a great release and the ability to let go. Joey knew that she wanted to share this feeling with others. After completing the first 200 hours of training, Joey could not wait to dive deeper into the next 300 hours of advanced training. She holds certifications in specialties such as Reiki, Sound Healing and specific yoga practices has further enhanced her passion to share yoga and sound healing with others. When Joey is not on the mat you will find her at the YMCA working out, hanging with her 3 year-old Bichon, Maya, spending time with her family and friends, and capturing moments through her photo lens.",
    specialties: "Vinyasa, Mudra Certification , Meditation Techniques Certification, Journey from Confusion to Conviction – Bhagwadgeeta, Learning Atharvasheersh for Positivity",
  },
  {
    id: 7,
    title: "Instructor",
    name: "Patricia Barrett",
    image: "patricia.jpeg",
    certifications: "RYS 200",
    description: "Patricia Barrett has been on a lifelong yoga journey. Beginning in college, yoga and meditation have followed her through the various chapters of her life. As a high school teacher for 20 years, she introduced the students to the benefits of meditation and mindfulness. For 5 years she was the Director of Pastoral Care for the Department for Persons with Disabilities. During this time, she began a chair yoga program for the men and women with developmental disabilities as well as teaching at a drug and alcohol rehabilitation program. Originally from New Jersey she moved here a year ago with her husband Tom and began searching for a yoga studio to call home. The Yoga Barre became that home.",
    specialties: "Yoga4Sobriety, Yoga and the Chakras, Chair Yoga, Yin Yoga, Reiki Level I, MBSR (Mindfulness Based Meditation)",
  }
];

export const instructorInitialValue: InstructorInitialValue = {
  name: "",
  certifications: "",
  image: "",
  title: "",
  description: "",
  specialties: "",
};

export const instructorValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  client: Yup.string().required("Client Name is required"),
  description: Yup.string().required("Some Details is required"),
  progress: Yup.number().required("Between 0 to 100").max(100),
});