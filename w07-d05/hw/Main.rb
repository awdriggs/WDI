require 'pry'


require_relative './Word.rb'
require_relative './Game.rb'

words_array = ['a day in the life', 'a hard days night', 'a little help from my friends', 'a taste of honey', 'across the universe', 'act naturally', 'all ive got to do', 'all my loving', 'all together now', 'all you need is love', 'and i love her', 'and your bird can sing', 'anna go to him', 'another girl', 'any time at all', 'ask me why', 'baby its you', 'baby you’re a rich man', 'babys in black', 'back in the ussr', 'bad boy', 'because', 'being for the benefit of mr kite', 'birthday', 'blackbird', 'blue jay way', 'boys', 'cant buy me love', 'carry that weight', 'chains', 'come together', 'cry baby cry', 'day tripper', 'dear prudence', 'devil in her heart', 'dig a pony', 'dig it', 'dizzy miss lizzie', 'do you want to know a secret', 'doctor robert', 'dont bother me', 'dont let me down', 'dont pass me by', 'drive my car', 'eight days a week', 'eleanor rigby', 'every little thing', 'everybodys got something to hide except me and my monkey', 'everybodys trying to be my baby', 'fixing a hole', 'for no one', 'for you blue', 'free as a bird', 'from me to you', 'get back', 'getting better', 'girl', 'glass onion', 'golden slumbers', 'good day sunshine', 'good morning good morning', 'good night', 'got to get you into my life', 'happiness is a warm gun', 'hello goodbye', 'help', 'helter skelter', 'her majesty', 'here comes the sun', 'here there and everywhere', 'hey bulldog', 'hey jude', 'hold me tight', 'honey dont', 'honey pie', 'i am the walrus', 'i call your name', 'i dont want to spoil the party', 'i feel fine', 'i me mine', 'i need you', 'i saw her standing there', 'i should have known better', 'i wanna be your man', 'i want to hold your hand', 'i want to tell you', 'i want you (she’s so heavy)', 'i will', 'ill be back', 'ill cry instead', 'ill follow the sun', 'ill get you', 'im a loser', 'im down', 'im just happy to dance with you', 'im looking through you', 'im only sleeping', 'im so tired', 'ive got a feeling', 'ive just seen a face', 'if i fell', 'if i needed someone', 'in my life', 'it wont be long', 'its all too much', 'its only love', 'julia', 'komm gib mir deine hand', 'lady madonna', 'let it be', 'little child', 'long tall sally', 'long long long', 'love me do', 'love you to', 'lovely rita', 'lucy in the sky with diamonds', 'maggie mae', 'magical mystery tour', 'martha my dear', 'matchbox', 'maxwells silver hammer', 'mean mr mustard', 'medley: kansas city hey hey hey hey', 'michelle', 'misery', 'money (thats what i want)', 'mother natures son', 'mr moonlight', 'no reply', 'norwegian wood', 'not a second time', 'nowhere man', 'obladi oblada', 'octopuss garden', 'oh darling', 'old brown shoe', 'one after 909', 'only a northern song', 'ps i love you', 'paperback writer', 'penny lane', 'piggies', 'please mister postman', 'please please me', 'polythene pam', 'rain', 'real love', 'revolution', 'rock and roll music', 'rocky raccoon', 'roll over beethoven', 'run for your life', 'savoy truffle', 'sexy sadie', 'sgt peppers lonely hearts club band (reprise)', 'sgt peppers lonely hearts club band', 'she came in through the bathroom window', 'she loves you', 'she said she said', 'shes a woman', 'shes leaving home', 'sie liebt dich', 'slow down', 'something', 'strawberry fields forever', 'sun king', 'taxman', 'tell me what you see', 'tell me why', 'thank you girl', 'the ballad of john and yoko', 'the continuing story of bungalow bill', 'the end', 'the fool on the hill', 'the inner light', 'the long and winding road', 'the night before', 'the word', 'theres a place', 'things we said today', 'think for yourself', 'this boy', 'ticket to ride', 'till there was you', 'tomorrow never knows', 'twist and shout', 'two of us', 'wait', 'we can work it out', 'what goes on', 'what youre doing', 'when i get home', 'when i’m sixtyfour', 'while my guitar gently weeps', 'why dont we do it in the road?', 'wild honey pie', 'within you without you', 'words of love', 'yellow submarine', 'yer blues', 'yes it is', 'yesterday', 'you can’t do that', 'you know my name (look up the number)', 'you like me too much', 'you never give me your money', 'you really got a hold on me', 'you wont see me', 'youre going to lose that girl', 'youve got to hide your love away', 'your mother should know']

def clear
	puts "\e[H\e[2J" # clears the screen my pretty!
end

def play(word)
	game = Game.new(word)

	
	clear

	until (game.over?)
		game.render
		print "make a guess => "
		game.guess(gets.chomp)
		clear
	end
	
	game.render
	game.over_message

	print "press enter to return to menu"
	gets.chomp
end

loop do
	clear
	puts "Welcome to Beatles of Fortune!"
	print "Make a Selection || play (p) | add word (a) | quit (q) | => "

	choice = gets.chomp

	if choice == 'p' then
		play(words_array.sample)
	end

	if choice == 'a' then
		print "type words to add to the bank => "
		gets.chomp.split(' ').each{ |word| words_array.push(word) }
		
	end

	if choice == 'q' then
		break
	end
end

