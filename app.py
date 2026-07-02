from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


# ==========================================
# HOME PAGE
# ==========================================

@app.route("/")
def home():
    return render_template("home.html")

# ==========================================
# ABOUT PAGE
# ==========================================

@app.route("/about")
def about():
    return render_template("about.html")


# ==========================================
# PACKAGES PAGE
# ==========================================

@app.route("/packages")
def packages():
    return render_template("packages.html")

# ==========================================
# FLEET PAGE
# ==========================================
@app.route("/fleet")
def fleet():

    return render_template("fleet.html")

# ==========================================
# BOOKING API
# ==========================================

@app.route("/book", methods=["POST"])
def book():

    data = request.get_json()

    print("\n========== NEW BOOKING ==========")
    print(data)
    print("=================================\n")

    return jsonify({
        "success": True,
        "message": "Booking received successfully."
    })


# ==========================================
# RUN APPLICATION
# ==========================================

if __name__ == "__main__":
    app.run(debug=True, port=5001)