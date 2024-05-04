export const funEmojis = [
	"message"
];

export const getRandomEmoji = () => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};
