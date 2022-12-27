import instaloader
import csv

class GetInstagramProfile():
    def __init__(self) -> None:
        self.L = instaloader.Instaloader()
        self.L.interactive_login("rheal3")

    def get_post_info_csv(self,username):
        with open(username+'.csv', 'w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            posts = instaloader.Profile.from_username(self.L.context, username).get_posts()
            writer.writerow(["caption", "date", "post url", "image url"])
            for post in posts:
                print("post date: "+str(post.date))
                posturl = "https://www.instagram.com/p/"+post.shortcode
                writer.writerow([post.caption, post.date, posturl, post.url])



if __name__=="__main__":
    cls = GetInstagramProfile()
    # cls.get_post_info_csv("fitgreenmind")

# https://python.plainenglish.io/scrape-everythings-from-instagram-using-python-39b5a8baf2e5