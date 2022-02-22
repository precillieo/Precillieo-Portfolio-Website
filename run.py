from flask import Flask, render_template, url_for

app= Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
	return render_template('home.html')
	

@app.route("/about")
def about():
	return render_template('about.html')

@app.route("/portfolio", methods= ['GET', 'POST'])
def portfolio():
	return render_template('portfolio.html')


@app.route("/blog")
def blog():
	return render_template('blog.html')

@app.route("/community")
def community():
	return render_template('community.html')

@app.route("/talks")
def talks():
	return render_template('talks.html')

@app.route("/awards")
def awards():
	return render_template('awards.html')

@app.route("/work")
def work():
	return render_template('work.html')

if __name__=="__main__":
	app.run(debug= True)