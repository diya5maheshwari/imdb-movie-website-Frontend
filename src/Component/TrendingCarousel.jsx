import '../App.css';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { motion } from 'framer-motion';

function TrendingCarousel() {
    // Animation variants for Framer Motion
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.2 } }
    };
    
    const trendingMovies = [
        {
            id: 1,
            title: "Chhaava",
            rating: 7.3,
            image: "https://i.ytimg.com/vi/G-QIKCd8sz0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmkBRra4HBudAObagcuc-54N0DKA",
            year: 2025,
            genre: ["Action", "Adventure", "Sci-Fi"],
        },
        {
            id: 2,
            title: "Housefull 5",
            rating: 3.4,
            image: "https://m.media-amazon.com/images/M/MV5BZmIzMThjNTYtNjkwZi00NmM3LTliNGItZWIxYTUwMGU1YzM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            year: 2023,
            genre: ["Comedy", "Drama", "Romance"],
        },
        {
            id: 3,
            title: "L2: Empuraan",
            rating: 8.9,
            image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202503/67e4ed84d3d17-mohanlal--prithviraj-sukumaran--empuraan-review-271735411-16x9.jpeg?size=948:533",
            year: 2025,
            genre: ["Biography", "Drama", "History"],
        },
        {
            id: 4,
            title: "Flight Risk",
            rating: 5.2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKn7g54xIHwi8iN85RkQ0q8W_ilI5VYhQkw&s",
            year: 2025,
            genre: ["Action", "Crime", "Drama"],
        },
        {
            id: 5,
            title: "To Catch a Killer",
            rating: 6.6,
            image: "https://i.ytimg.com/vi/KVO1LnqzxpQ/maxresdefault.jpg",
            year: 2023,
            genre: ["Crime", "Drama", "History"],
        },
        {
            id: 6,
            title: "Gullack-4",
            rating: 9.1,
            image: "https://i.ytimg.com/vi/twcQSVmWoao/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD-oaDM5yFD6-BOnKzJsyFPXMx0ig",
            year: 2019,
            genre: ["Comedy", "Drama"],
        }
    ];

    return (
        <motion.div 
            className="carousel-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2 
                className='carousel-heading'
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                🔥 Trending Movies
            </motion.h2>
            
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                className="mySwiper"
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {trendingMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <motion.div 
                            className="carousel-item"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <img src={movie.image} alt={movie.title} />
                            <div className="carousel-item-info">
                                <h3>{movie.title}</h3>
                                <p><span>Rating:</span> <Star color='yellow' fill='yellow' size={16} /> {movie.rating}</p>
                                <p><span>Year:</span> {movie.year}</p>
                                <p><span>Genre:</span> {movie.genre.join(", ")}</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
}

export default TrendingCarousel;
