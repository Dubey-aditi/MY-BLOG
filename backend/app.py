from flask import Flask, request
import psycopg2

# Connect to your PostgreSQL
conn = psycopg2.connect(
    dbname="postgres",  # usually 'postgres' unless you made a custom one
    user="aditidubey",  # likely your Mac username (check Postico settings)
    password="",  # if set; otherwise leave it blank
    host="localhost",
    port="5432",
)

cursor = conn.cursor()

app = Flask(__name__)


@app.route("/home")
def hello_world():
    return "<p>Hello, World!</p>"


@app.get("/about")
def about():
    ##Return info about you (bio, etc)
    return "<p>Hello, World!</p>"


@app.get("/blogList")
def blog_list():
    cursor.execute(
        "SELECT id, title, topic, cover_photo_url, content, created_at FROM blogs ORDER BY created_at DESC;"
    )
    blogs = cursor.fetchall()
    blog_list = []
    for blog in blogs:
        blog_list.append(
            {
                "id": blog[0],
                "title": blog[1],
                "topic": blog[2],
                "cover_photo_url": blog[3],
                "content": blog[4],
                "created_at": blog[5],
            }
        )
    return {"blogs": blog_list}


@app.get("/blogs/<int:id>")
def get_blog(id):
    ##	Get one blog post
    cursor.execute(
        "SELECT id, title, topic, cover_photo_url, content, created_at FROM blogs WHERE id = %s;",
        (id,),
    )
    blog = cursor.fetchone()
    if blog:
        blog_data = {
            "id": blog[0],
            "title": blog[1],
            "topic": blog[2],
            "cover_photo_url": blog[3],
            "content": blog[4],
            "created_at": blog[5],
        }
        return blog_data
    else:
        return {"error": "Blog not found"}, 404


@app.post("/writeBlog")
def post_blog():
    try:
        data = request.get_json()
        title = data.get("title")
        topic = data.get("topic")
        cover_photo_url = data.get("cover_photo_url")
        content = data.get("content")
        cursor.execute(
            "INSERT INTO blogs (title, topic, cover_photo_url, content) VALUES (%s, %s, %s, %s);",
            (
                title,
                topic,
                cover_photo_url,
                content,
            ),
        )
        conn.commit()
        return {"success": "Blog posted"}, 200
    except Exception as e:
        return {"error": "Blog not posted"}, 400


@app.post("/contact")
def contact():
    ## Receive contact messages
    return "<p>Hello, World!</p>"
