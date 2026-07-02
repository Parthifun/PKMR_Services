import sqlite3


def create_database():

    conn = sqlite3.connect("pkmr.db")

    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS bookings(

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        booking_id TEXT,

        service TEXT,

        package TEXT,

        travel_date TEXT,

        pickup TEXT,

        destination TEXT,

        pickup_time TEXT,

        passengers TEXT,

        vehicle TEXT,

        package_price TEXT,

        vehicle_price TEXT,

        total_price TEXT,

        customer_name TEXT,

        phone TEXT,

        email TEXT,

        notes TEXT,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    """)

    conn.commit()

    conn.close()


create_database()