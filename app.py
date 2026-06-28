from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


# ----------------------------
# Booking API
# ----------------------------

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


if __name__ == "__main__":
    app.run(debug=True, port=5001)