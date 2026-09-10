export type Testimonial = {
  name: string;
  time: string;
  rating: number;
  text: string;
  ownerReply?: string;
  ownerReplyTime?: string;
  meta?: string;
};

export const GOOGLE_REVIEW_URL = "https://share.google/BM8LsAgclLP8xp2Wf";

export const testimonialsSummary = {
  business: "C4 Plus Drainage",
  address: "3 Mill St, Redhill RH1 6PA, United Kingdom",
  rating: 4.9,
  reviewCount: 58,
};

export const testimonials: Testimonial[] = [
  {
    name: "Jake Peet",
    meta: "9 reviews · 4 photos",
    time: "4 months ago",
    rating: 5,
    text: "After contacting Ryan, he sent an engineer out the next day. George was the most polite, calm and professional guy you could hope for. He carried out a thorough investigation and resolved the issue within about an hour and a half.",
    ownerReplyTime: "4 months ago",
    ownerReply:
      "Thanks so much, Jake — we really appreciate the kind words and recommendation. We're glad Ryan could arrange a next-day visit and that George delivered professional, calm service and resolved the issue quickly. It means a lot to know our team made the difference compared to others. We'll pass your praise on to George and the team.",
  },
  {
    name: "Daniel Callaghan",
    meta: "Local Guide · 34 reviews · 1 photo",
    time: "2 months ago",
    rating: 5,
    text: "C4 Plus Drainage recently conducted a couple of surveys and cleans of our system for our extension application. They were simply fantastic. Friendly, professional and provided excellent advise. I'd like to thank the team for their amazing work and follow-up support.",
    ownerReplyTime: "2 months ago",
    ownerReply:
      "Thank you so much for the fantastic review, Daniel. We’re delighted our team were friendly, professional and helpful with the surveys, cleans and follow-up support for your extension application. I’ll pass your kind words on to everyone — they’ll be thrilled to hear it. If you need anything further, please get in touch.",
  },
  {
    name: "Karen Gorecki",
    meta: "2 reviews",
    time: "3 months ago",
    rating: 5,
    text: "We used C4 drainage in April to diagnose and fix a leaking pipe that was causing a smell in the bathroom. Great service - friendly and reliable and took time to explain the issue and discuss the best solution. The work was carried out quickly and the issue is resolved. Would recommend.",
    ownerReplyTime: "3 months ago",
    ownerReply:
      "Thank you so much for your kind review, Karen. We’re glad our team could diagnose and fix the leaking pipe and that you found our staff friendly and informative. It’s great to hear the issue is resolved and that you would recommend us. We appreciate your trust and are here if you need anything else in the future.",
  },
  {
    name: "Mr & Mrs Mathurin",
    meta: "2 reviews",
    time: "2 months ago",
    rating: 5,
    text: "We just had work done due to a blocked drain affecting our residential property by William and Daniel from C4 PLUS and the service was outstanding. They arrived on the premises in record time and went above and beyond anything we would normally expect from a drainage service. If we could give them six stars, we absolutely would.",
    ownerReplyTime: "2 months ago",
    ownerReply:
      "Thank you Mr & Mrs Mathurin for your fantastic review and for highlighting William and Daniel. We’re delighted they arrived quickly and went above and beyond to clear your blocked drain. We appreciate your kind words and would be thrilled to help again or if you recommend us to others. Your feedback means a lot to the whole C4 PLUS team.",
  },
  {
    name: "Bob Byrne",
    meta: "6 reviews",
    time: "5 months ago",
    rating: 5,
    text: "C4 are a fabulous company. It’s the first time we ever used them and I wouldn’t go anywhere else. Great team who did our drain survey thoroughly and kept us informed throughout. Very competitively priced and extremely knowledgeable and efficient.",
    ownerReplyTime: "5 months ago",
    ownerReply:
      "Thank you, Bob — we really appreciate the fantastic 5-star review. We're thrilled our team carried out your drain survey thoroughly and kept you informed throughout. It means a lot to hear you found our pricing competitive and our crew knowledgeable and efficient. We look forward to helping you again whenever you need us.",
  },
  {
    name: "Jane Cattell",
    meta: "10 reviews",
    time: "7 months ago",
    rating: 5,
    text: "Wow - these guys are the best. Spoke to Ryan about a problem with our drainage and Logan came out within the hour. The nicest people I’ve ever dealt with. There aren’t many companies as efficient and helpful as C4 - can highly recommend - don’t go anywhere else.",
    ownerReplyTime: "7 months ago",
    ownerReply:
      "Thank you so much for the fantastic review, Jane. We’re thrilled Ryan and Logan were able to respond quickly and resolve your drainage issue, and we appreciate you highlighting their helpfulness and efficiency. We’re always here when you need us and truly appreciate the recommendation.",
  },
  {
    name: "Sue Corrance",
    meta: "10 reviews · 5 photos",
    time: "7 months ago",
    rating: 5,
    text: "I thought I'd written this review last year, but find now that I didn't. My business Civil Wills goes the extra mile to look after its clients — and C4 Plus Drainage did the same for us. Ryan and Will responded quickly and gave practical advice that reassured our client.",
    ownerReplyTime: "7 months ago",
    ownerReply:
      "Thank you Sue for your kind words and for taking the time to leave this review. We’re proud that Ryan and Will could respond quickly and give practical advice to help your client. It means a lot to know they felt reassured and that Civil Wills trusts us to go the extra mile. We appreciate the recommendation and are here whenever you or your clients need us.",
  },
  {
    name: "Sue Cannings",
    meta: "Local Guide · 15 reviews",
    time: "7 months ago",
    rating: 5,
    text: "C4plus have been fantastic in helping with my drainage problem. They attended site several times, always polite and punctual. They found the exact problem and Ryan advised it should be covered by my home insurance, which it was. I have no hesitation recommending this very professional, family run, business.",
    ownerReplyTime: "7 months ago",
    ownerReply:
      "Thank you, Sue, for your glowing review. We're delighted Ryan and the team located the issue quickly and that your insurer covered the repair. We appreciate your recommendation of our family-run business and are glad our staff were polite and punctual. If you need anything further, we're always happy to help.",
  },
  {
    name: "Louise Sweeney",
    meta: "4 reviews",
    time: "4 months ago",
    rating: 5,
    text: "Emily was excellent and extremely helpful. Booked through the insurance company. Emily couldn't help you enough. Highly recommend.",
    ownerReplyTime: "4 months ago",
    ownerReply:
      "Thank you, Louise! We're thrilled Emily was so helpful and that you had a great experience. We appreciate you booking through your insurance and for recommending us. If you need anything else, we're here to help.",
  },
  {
    name: "Jas Hollinshead",
    meta: "7 reviews",
    time: "8 months ago",
    rating: 5,
    text: "I’ve worked with C4 Plus Drainage for the past few years, and every experience has been excellent. Ryan and Paulo are fantastic communicators who consistently go above and beyond to help. I couldn’t recommend them highly enough.",
    ownerReplyTime: "8 months ago",
    ownerReply:
      "Thank you, Jas. We’re thrilled to hear you’ve had consistently excellent experiences over the years. I’ll be sure Ryan and Paulo see your kind words — they’ll be delighted. We truly appreciate your recommendation and look forward to helping you again whenever you need us.",
  },
  {
    name: "Aimee Halpin",
    meta: "3 reviews · 1 photo",
    time: "8 months ago",
    rating: 5,
    text: "This company have been amazing from start to finish. From my initial phone call to having the fabulous Emily visit only a few hours later. Nothing was too much trouble and everything was explained really well and Emily even made drainage feel straightforward.",
    ownerReplyTime: "8 months ago",
    ownerReply:
      "Thank you so much for your wonderful review, Aimee. We’re delighted Emily could respond quickly, explain everything clearly, and get to the bottom of the problem even in difficult conditions. We’ll be sure to pass your praise on to Emily and the team. We really appreciate your recommendation and are here if you need any further help.",
  },
  {
    name: "Trevor Cook",
    meta: "1 review",
    time: "a year ago",
    rating: 5,
    text: "Fantastic service. Attended site next day to examine new drain works carried out by builders. Completed works and remained professional throughout even with discussions with builders going on around them. They had all equipment on board to complete the job.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your wonderful feedback, Trevor! We're thrilled to hear that you had a fantastic experience with our team, especially with Paulo and Emily. It's great to know that our team maintained professionalism and was well-equipped to handle the job as it evolved. Your recommendation means a lot to us, and we look forward to serving you again in the future.",
  },
  {
    name: "Sean Dowd",
    meta: "5 reviews · 4 photos",
    time: "a year ago",
    rating: 5,
    text: "We contacted C4 plus drainage as we had an external drain blockage. I spoke to Ryan and explained the situation, he was able to get someone out the same day. Logan visited our property and was very helpful and professional and resolved the issue.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your wonderful review, Sean! We're thrilled to hear that Ryan and Logan were able to assist you promptly and professionally. Your kind words about our team and service mean a lot to us. We appreciate your support and are here to help whenever you need us!",
  },
  {
    name: "Niyi I",
    meta: "7 reviews · 1 photo",
    time: "a year ago",
    rating: 5,
    text: "Thanks C4 Plus Drainage Ltd! Right, how can I say this - if your insurance company does not use C4 Plus Drainage, ask them to. Courtney, Danny and Ryan were excellent.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your fantastic review, Niyi! We're thrilled to hear that our team was able to quickly resolve your drainage issue. It’s wonderful to know that Courtney, Danny, and Ryan made a positive impact during your experience. Your recommendation means a lot to us, and we look forward to assisting you again in the future. Enjoy the rest of your bank holiday!",
  },
  {
    name: "Karen Pitt",
    meta: "Local Guide · 17 reviews · 9 photos",
    time: "a year ago",
    rating: 4,
    text: "Great experience. Visited the property pretty quickly, came first thing so we didn’t have to wait around for the day, and the issue was fixed quickly. One star deducted due to receiving the invoice and it advising it was overdue!",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your feedback, Karen. We're glad to hear that your experience was positive overall and that we could address your issue quickly. We apologize for the confusion regarding the invoice timing and appreciate you bringing it to our attention. Your concerns will be reviewed to ensure our communication is clear in the future. We value your business and hope to assist you again.",
  },
  {
    name: "Rui Pereira",
    meta: "4 reviews",
    time: "a year ago",
    rating: 5,
    text: "C4 Plus Drainage Ltd arrived on time as booked, Technician friendly & very knowledgeable, unblocked drain & cleaned drain & surrounding area. And disinfected area. I would highly recommend this company and definitely use again if needed.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your positive feedback, Rui! We’re glad to hear that our technician provided you with excellent service and that your drainage issue was resolved efficiently. Your recommendation means a lot to us, and we look forward to assisting you again in the future if needed.",
  },
  {
    name: "Renee Sofia",
    meta: "5 reviews · 1 photo",
    time: "2 years ago",
    rating: 5,
    text: "Really happy with the service :) We’ve had a problem with our bath draining slowly for a little while now. C4 sent someone over to take a look at it super quickly. Bradley was very polite, friendly, knowledgeable and professional and had everything sorted.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you for your kind words, Renee! We're delighted to hear you had such a positive experience with our service and with Bradley. We look forward to serving you in the future and deeply appreciate your recommendation!",
  },
  {
    name: "S B Darby",
    meta: "Local Guide · 12 reviews",
    time: "a year ago",
    rating: 5,
    text: "I contacted C4 Plus drainage recently to survey the drains at a property I am looking to buy. Ryan, on the phone, and Logan in person, gave excellent advice and service, highlighting the issues clearly in an understandable way. They provide a professional and trustworthy service.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your kind words and positive feedback! We're thrilled to hear that Ryan and Logan provided you with excellent service and valuable advice during your drain survey. We look forward to working with you on the remedial work once you acquire the property. Your recommendation means a lot to us!",
  },
  {
    name: "Jonathan Watkins",
    meta: "4 reviews",
    time: "3 months ago",
    rating: 5,
    text: "Great experience, very helpful and honest about what service was best for me. Communication was really clear and the service was quick and easy",
    ownerReplyTime: "3 months ago",
    ownerReply:
      "Thank you, Jonathan. We’re glad you had a great experience and appreciate your kind words about our honesty, clear communication, and quick service. We look forward to helping you again or assisting anyone you refer.",
  },
  {
    name: "Tim Hatari",
    meta: "Local Guide · 18 reviews",
    time: "a year ago",
    rating: 5,
    text: "I want to thank you for carrying out the gutter cleaning at our home. Your team were prompt and professional, and it’s the first time we’ve had someone make use of CCTV to assess where the gutters may require most effort before beginning.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your fantastic feedback, Tim! We're thrilled to hear that you were satisfied with our gutter cleaning service and our team's professionalism. Craig will be delighted to know his efforts made a positive impression on you. We truly appreciate your recommendations and look forward to serving you and your family in the future. Thank you for choosing C4 Plus Drainage!",
  },
  {
    name: "Jason Carlon",
    meta: "11 reviews · 2 photos",
    time: "a year ago",
    rating: 5,
    text: "I am the owner of Rochford Stokes Estate Agents in Battersea. We have used C4 Plus as our drainage contractor on our managed properties for many years. They have always proved to be very reliable and efficient and our clients and tenants are well looked after.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your excellent review, Jason! We are thrilled to hear about your positive experiences with our team over the years. It’s great to know that Craig was able to assist you promptly and efficiently at your home as well. Your recommendation means a lot to us, and we look forward to continuing to serve you and your clients!",
  },
  {
    name: "Julia Lloyd",
    meta: "9 reviews",
    time: "a year ago",
    rating: 5,
    text: "Once again C4 came to the rescue. We used them a year ago to clear the drains at a previous property and having moved to a new one discovered the drains there to be blocked too - despite being empty for a year! The engineer, Courtney, was excellent.",
  },
  {
    name: "Suresh VR",
    meta: "Local Guide · 32 reviews · 22 photos",
    time: "a year ago",
    rating: 5,
    text: "Logan was very professional and thorough in his approach and did the job with the right set of tools and devices. The job got finished within 30 minutes and cleared the blocked kitchen sink and there was no more spillage from the overflow pipe. Highly recommended.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your wonderful review, Suresh! We're delighted to hear about your positive experience with Logan. Your recommendation means a lot to us, and we look forward to assisting you again in the future!",
  },
  {
    name: "Kaarin Scanlan",
    meta: "7 reviews",
    time: "2 years ago",
    rating: 5,
    text: "I am very impressed with the work of c4 plus. They worked really hard to discover what was causing a blockage in my drains, their perseverance paid off as they fixed my blocked drains which two other companies had failed to do.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Hello Kaarin. Thank you for your great review! I will pass on your lovely feedback to the team that attended your property. Again thank you for your positive review. Our sincere thanks, C4.",
  },
  {
    name: "Adrian Traher",
    meta: "Local Guide · 12 reviews",
    time: "a year ago",
    rating: 5,
    text: "Dear Sirs, I wanted to thank you for the excellent service that you provided at the beginning of October. We have been involved with pigeons on our property and your technician helped resolve the related drainage issues effectively.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you, Adrian, for your wonderful review! We're delighted to hear about your positive experience with our service. Our team always strives for the highest standards, and it's great to know that our technician was able to assist you effectively. Your recommendation means a lot to us!",
  },
  {
    name: "Mark Bartlett",
    meta: "Local Guide · 67 reviews · 6 photos",
    time: "2 years ago",
    rating: 5,
    text: "An excellent company, well recommended! I called them about a blocked toilet, they arranged an engineer the same day. Logan the engineer and his colleague were extremely professional and courteous. They fixed the issue quickly. Great job thanks!",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you so much for taking the time to leave us a 5 star rating - it's much appreciated! We will inform Logan & Sam of your kind words. Again thank you from C4 Team.",
  },
  {
    name: "AJ G",
    meta: "12 reviews · 3 photos",
    time: "a year ago",
    rating: 5,
    text: "We had several partial collapsed sections of our 'dirty' drains. One (costly) survey said lots of (expensive) relining and some (expensive) excavation was required. Another drain company couldn't tell me what their warranty was. C4 Plus Drainage gave us a clear, efficient solution and quality service.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for sharing your detailed experience, AJ! We’re thrilled to hear that we could provide you with an efficient solution and deliver quality service. Your recommendation means a lot to us, and we appreciate the trust you placed in C4 Plus Drainage. If you need any further assistance in the future, please don't hesitate to reach out!",
  },
  {
    name: "Kyle Harbour",
    meta: "Local Guide · 157 reviews · 174 photos",
    time: "2 years ago",
    rating: 5,
    text: "Had a blockage on my toilet. Contacted C4 plus drainage and explained my problem, they gave me their availability which was same day and a competitive price.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you for your Review and we appreciate your continued support on using our Drainage services. Thanks",
  },
  {
    name: "Chi Tsui",
    meta: "3 reviews",
    time: "2 years ago",
    rating: 5,
    text: "We had drain blockage in our building caused by irresponsible tradesmen dropping blue roll paper, bathroom fixings and pouring cement down the drain. Ryan and Logan arrived on site straight away to get to work, despite the awkward location.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you, Chi, for taking the time to write such a detailed review of our services! We're glad to hear about the positive impact that Ryan and Logan made in resolving your draining issue and ensuring it was thoroughly clean. Their dedication reflects on our overall service commitment to our clients. Your kind words are greatly appreciated!",
  },
  {
    name: "C A",
    meta: "4 reviews",
    time: "a year ago",
    rating: 5,
    text: "Logan came and cleared our blocked drain within 15 minutes, and did an excellent job. He also explained what he needed to do to get the job done, we now have a free running drain thanks to you and your team.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for the wonderful review, C A! We're delighted to hear that Logan was able to clear your blocked drain quickly and effectively. Your satisfaction is our priority, and we're pleased to have helped you. We appreciate your kind words and look forward to serving you again in the future!",
  },
  {
    name: "Steve Triner",
    meta: "11 reviews",
    time: "a year ago",
    rating: 5,
    text: "The previous owners of my house had thought it a good idea to bury a manhole cover under a raised flower bed. The manhole collapsed into the sewer, causing a horrible mess. I phoned C4 simply because one of their vans was parked round the corner — Antonio and the team resolved the emergency quickly.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for sharing your experience, Steve! We're glad to hear that Antonio and the team were able to resolve the emergency quickly and effectively. Your recommendation means a lot to us, and we appreciate your trust in our services. If you need any further assistance, feel free to reach out!",
  },
  {
    name: "Ameena Moghal",
    meta: "4 reviews · 1 photo",
    time: "7 months ago",
    rating: 5,
    text: "Quick and Excellent service by C4, William and team arrived promptly without having to wait, accessed and cleared blocked drainage.",
    ownerReplyTime: "7 months ago",
    ownerReply:
      "Thank you so much, Ameena — we’re thrilled William and the C4 team arrived promptly and cleared the blocked drainage. We appreciate you taking the time to share your experience and your kind words. We’re here whenever you need us again.",
  },
  {
    name: "Yean Yin Lim",
    meta: "3 reviews",
    time: "a year ago",
    rating: 5,
    text: "Recently dropped my phone in a road side gully. Totally panicking and worried. I tried going through the proper channels of SES Water, Thames, Reigate and Banstead — C4 Plus Drainage and Paulo helped promptly and effectively.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for sharing your experience, Yean! We're thrilled to hear that Paulo was able to assist you promptly and effectively. Your kind words will be passed on to him. We’re here to help whenever you need us!",
  },
  {
    name: "Hugh McKenna",
    meta: "1 review",
    time: "2 years ago",
    rating: 1,
    text: "Do not go near this company. They came round for 20 mins, purportedly unblocked my kitchen drain, and charged me £120.00 on the spot. 15 mins after they’d left it was as blocked as before. They followed up the visit with an email saying further work was recommended.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Good afternoon, Hugh. I did contact you a few days later after a concerning email I received from yourself. C4 Plus attempted to understand the cause for your concern. During the conversation you advised that the drain re-blocked, but we did not receive a call to advise us of this reoccurring blockage — if we had, we would have instructed a technician to reattend as a matter of urgency. Regarding equipment, all of our vehicles carry the correct equipment for day-to-day work. What the technician advised was that further recommendations would be required — a descale and cleaning activity, which is a different work scope. Our technicians used a wet vac and rigid machinery, cleared the blockage, tested full flow in front of you, and sent a work report with photos of fat and grease buildup. We also provided a quotation for follow-on recommendations. Our customer service pre and post works is very important to us. If you have any other queries, please do not hesitate to call.",
  },
  {
    name: "Edward Nicholson",
    meta: "5 reviews",
    time: "a year ago",
    rating: 5,
    text: "Excellent service. This company stands out a country mile. A very knowledgeable experienced team but smart enough to think on their feet and adapt to individual circumstances. A rare attribute! Thank you Logan & Antonio.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your fantastic feedback, Edward! We're thrilled to hear that you found our service excellent and our team knowledgeable and adaptable. Logan and Antonio will be delighted to know they made an impact. Your support means a lot to us!",
  },
  {
    name: "Jane White",
    meta: "Local Guide · 15 reviews",
    time: "2 years ago",
    rating: 5,
    text: "I have been very impressed with the level of customer service from this company. The engineers have been polite and pleasant at all times. I have already recommended C4. Great to find a company who clearly pride themselves on customer care.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you for your kind words, Jane! We're glad our team has made a great impression. Your satisfaction is our best reward. We appreciate your recommendations and look forward to continuing to provide top-notch service.",
  },
  {
    name: "Joan Black",
    meta: "1 review",
    time: "a year ago",
    rating: 5,
    text: "Fantastic service. Arrived within 90 minutes. Courtney was very thorough and professional. Did a fantastic job. Would definitely recommend this company",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your wonderful review, Joan! We are thrilled to hear that you had a fantastic experience and that Courtney provided excellent service. Your recommendation means a lot to us! We look forward to assisting you again in the future.",
  },
  {
    name: "David Hellyer",
    meta: "2 reviews",
    time: "2 years ago",
    rating: 5,
    text: "Absolutely fantastic service and price. Quick to respond, extremely helpful and explained everything without the jargon. They were providing a free service throughout lock down to OAPs which we thought was so generous. I would highly recommend C4 Plus!",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you so much for taking the time to leave us a 5 star rating - it's much appreciated!",
  },
  {
    name: "Matt Parsons",
    meta: "Local Guide · 19 reviews · 4 photos",
    time: "a year ago",
    rating: 5,
    text: "Called them with a blocked drain and Craig was here within 2 hours as promised. He knew his stuff and cleared the drain, talked me through the issue and what he recommended!",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your fantastic review, Matt! We're thrilled to hear that Craig was able to resolve your blocked drain promptly and provide you with a clear understanding of the issue. Our team always strives to deliver top-notch service, and it's great to know we met your expectations. If you need any further assistance in the future, don't hesitate to reach out!",
  },
  {
    name: "Mark Sluimers",
    meta: "Local Guide · 36 reviews",
    time: "a year ago",
    rating: 5,
    text: "Called at 8AM, at 11:30AM William (give this man a raise by the way) showed up and unblocked my drains in 10 minutes tops. Excellent, professional service, would recommend to anyone.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your fantastic review, Mark! We're thrilled to hear that William provided you with quick and professional service. We'll be sure to pass along your praise to him, and we appreciate your recommendation. If you need any assistance in the future, don't hesitate to reach out!",
  },
  {
    name: "Matthew Baker",
    meta: "Local Guide · 35 reviews · 12 photos",
    time: "2 years ago",
    rating: 5,
    text: "Dear Ryan & Paul, You have recently visited Soper Hall, a community centre in Caterham run by a charity of which I am a trustee. The building is over 100 years old and the team provided excellent support.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Hello Matthew. We truly appreciate your continuous support and trust in us. Your 5-star review brightens our day and serves as a constant reminder of why we love what we do. We’ll continue striving to provide exceptional services and outstanding customer care. I will pass on your remarks to the team that attended and thank you for your custom.",
  },
  {
    name: "Katy",
    meta: "1 review",
    time: "a year ago",
    rating: 5,
    text: "I was told by Lanes group that I would need an excavation to find the pipe leading to my man hole which was horrendous with a newborn and toddler. This was in fact not the case, as I was then sent out C4 plus and the polite professional guy, Bradley, found the blockage and cleared the drain for me in no time - thank you so much!",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your wonderful feedback, Katy! We're thrilled to hear that Bradley was able to provide you with the efficient service you needed. It's great to know we could help make things easier for you, especially with little ones around. We appreciate your kind words and look forward to assisting you again in the future!",
  },
  {
    name: "Tom Heron",
    meta: "Local Guide · 38 reviews · 1 photo",
    time: "11 months ago",
    rating: 5,
    text: "Brilliant service. Came out and cleared a really tricky blockage. Very reasonably priced too! Would highly recommend!",
    ownerReplyTime: "11 months ago",
    ownerReply:
      "Thank you for your fantastic feedback, Tom! We're glad to hear that you were pleased with our service and pricing. Your recommendation means a lot to us, and we look forward to helping you again in the future!",
  },
  {
    name: "Jay Lck",
    meta: "Local Guide · 61 reviews · 4 photos",
    time: "2 years ago",
    rating: 5,
    text: "Requested an emergency blockage and got an appointment straight away! Unblocked the issue in the garden, fantastic customer service and job done thoroughly. Thank you again!",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you for your feedback, Jay! We're always here to help in emergency situations, and we're glad we could assist with your blockage issue. Your kind words about our customer service and work are much appreciated.",
  },
  {
    name: "Michele Huggett",
    meta: "Local Guide · 21 reviews · 2 photos",
    time: "a year ago",
    rating: 5,
    text: "Fantastic service. Arrived within 90 minutes of calling. Courtney was thorough and professional. Brilliant service - thanks so much.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your wonderful review, Michele! We're thrilled to hear that you had a fantastic experience and that Courtney provided you with such thorough and professional service. Your feedback motivates us to keep delivering excellent service. Thank you for choosing us!",
  },
  {
    name: "Peter Humphrey",
    meta: "7 reviews",
    time: "2 years ago",
    rating: 5,
    text: "Really fast and efficient service, we had noticed a bad odour coming from our kitchen sink after coming back from a weekend away, after a quick phone call in the morning the team were at the house within an hour and fixed the issue.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you so much for taking the time to leave us a 5 star rating - it's much appreciated! We'll pass your comments to the technicians that attended your property. Once again thank you from C4.",
  },
  {
    name: "Abigail Bland",
    meta: "3 reviews",
    time: "2 years ago",
    rating: 5,
    text: "Great customer service, and professionalism. Resolved my drainage issues with no problems at all! Very efficient team, would highly recommend!",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you for your kind words, Abigail! We are delighted to know that you had a positive experience with our team and your drainage issues were resolved efficiently. Your high recommendation is highly appreciated!",
  },
  {
    name: "L King",
    meta: "1 review",
    time: "2 years ago",
    rating: 5,
    text: "Quick response to our urgent call out - came and fixed the blockage very quickly and gave us great advice in case of future issues. Highly recommend - thanks",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you so much for taking the time to leave us a 5 star rating - it's much appreciated!",
  },
  {
    name: "Ben Hows",
    meta: "Local Guide · 15 reviews · 2 photos",
    time: "2 years ago",
    rating: 5,
    text: "Great company used over our property portfolio. Would recommend for the experience and knowledge. Thanks C4.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Hello Ben. Thank you for your business, your trust, and your confidence. It is our pleasure to provide our service to you. Thank you, C4.",
  },
  {
    name: "LINK ADMIN",
    meta: "3 reviews",
    time: "a year ago",
    rating: 5,
    text: "Very efficient dealing with the blocked drain which, hopefully, will solve the problem permanently. Just got on with the task, which was great.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your positive feedback, LINK ADMIN! We're glad to hear that our team efficiently addressed your blocked drain. We appreciate your trust in us and hope the solution lasts. If you need any further assistance, feel free to reach out!",
  },
  {
    name: "Andrew Nash",
    meta: "3 reviews · 2 photos",
    time: "2 years ago",
    rating: 5,
    text: "Excellent service, came out very quick and the engineer was straight onto the problem. Will definitely use again.",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Hello Andy. Thank you for your review and your ongoing support. As you know the backbone of C4 ethos is forming a meaningful and lasting relationship based on trust and integrity. Again thank you for your review. C4",
  },
  {
    name: "Nick Dolezal",
    meta: "3 reviews",
    time: "9 months ago",
    rating: 5,
    text: "Brilliant service - clean, quick and really helpful",
    ownerReplyTime: "9 months ago",
    ownerReply:
      "Thank you for your wonderful feedback! We're thrilled to hear that you found our service to be clean, quick, and helpful. Our team works hard to provide the best experience possible, and it's great to know we met your expectations. We look forward to serving you again soon!",
  },
  {
    name: "John W",
    meta: "7 reviews",
    time: "a year ago",
    rating: 5,
    text: "Excellent service especially as let down by building insurance company.",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your kind words, John! We're glad to hear that our service was able to assist you, especially during a challenging time with your building insurance. Your satisfaction is our top priority, and we appreciate you taking the time to share your experience. If you need anything else, don't hesitate to reach out.",
  },
  {
    name: "Roshe School",
    meta: "3 reviews · 4 photos",
    time: "a year ago",
    rating: 5,
    text: "Excellent service. Thank you",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your kind words, Roshe School! We're thrilled to hear you had an excellent experience with our service. Your satisfaction means a lot to us!",
  },
  {
    name: "Nadeem Ibrahim",
    meta: "4 reviews",
    time: "a year ago",
    rating: 5,
    text: "",
    ownerReplyTime: "a year ago",
    ownerReply:
      "Thank you for your 5-star rating, Nadeem! We appreciate your support and look forward to serving you again.",
  },
  {
    name: "Dave N",
    meta: "Local Guide · 64 reviews · 22 photos",
    time: "2 years ago",
    rating: 5,
    text: "",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Hello Dave. Thank you for taking the time to leave a 5-star review.",
  },
  {
    name: "Estera Dalik",
    meta: "4 reviews",
    time: "2 years ago",
    rating: 5,
    text: "",
    ownerReplyTime: "2 years ago",
    ownerReply:
      "Thank you so much for taking the time to leave us a 5 star rating - it's much appreciated!",
  },
];
