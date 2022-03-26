// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const sayings = [
		"It's a single-purpose cleanser.",
		"What's the emoji for emoji?",
		"I don't understand why it does all these things it does when it doesn't have to do any of them.",
		"Got any big plans for the long weekend?",
		"You're just saying words.",
		"All of the URLs we have are custom URLs.",
		"Getting into a little bit of trouble is important.",
		"If you're not getting into trouble you're not doing it right.",
		"I want a Claes Oldenburg sandwich.",
		"Create narratives about the projects you envisage.",
		"Always have 8-12 projects on the go.",
		"I do them when my boss is on leave.",
		"BOOM! You have a project.",
		"Rapid prototyping means iteration.",
		"Can you direct me to the shuffle board deck?",
		"Close your Outlook. I'm serious.",
		"Until you start testing and allowing yourself to try, you'll never start really doing anything.",
		"And I say: You know... we work in a museum... and we're closed!",
		"Next thing you know I'm thinking about a completely different piece of the puzzle!",
		"Now I'm just like: Wow, we have a lot to do!",
		"Maybe something by Huey Lewis?",
		"That is such a bunch of charette.",
		"The threshold for me is not being met.",
		"What is Micah's \"cave of delight\"?",
		"I'm just reaching my apex of aggravation with it.",
		"Where can we get some organic ginger ales around here?",
		"Eggs are totally photosensitive!!",
		"It's like Siri for cultural professionals.",
		"You can't log in and out of something that's not there.",
		"Money-globals is my rubric.",
		"Nobody owns volunteers.",
		"Don't break my little toy!",
  ]
  
  var says = sayings[Math.floor(Math.random() * sayings.length)]
  res.status(200).json({ saying: says })
}
