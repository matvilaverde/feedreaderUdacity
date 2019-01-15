$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Tests if each feed is defined and url is not empty
        it('has an url', function() {
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        });

        //Tests if each feed has a defined and not empty name 
        it('has defined name', function() {
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            })
        });
    });

    describe('The menu', function() {
        const bodyTag = document.getElementsByTagName("body")[0]; //gets the <body> to track classes for the tests

        //Tests if the class that hides the sidebar exists as default
        it('hides menu by default', function() {
            expect(bodyTag).toHaveClass('menu-hidden');
        });

        //Tests if clicking on the menu button hides and shows the sidebar
        it('hides and shows menu', function() {
            const menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect(bodyTag).not.toHaveClass('menu-hidden');
            menuIcon.click();
            expect(bodyTag).toHaveClass('menu-hidden');
        });
    });

    describe('Initial Entries', function() {
        //Asynchronously waits for the feed to load and then begins testing
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        //Tests if there's any entry in the feed, after it's loaded
        it('has an entry in the feed', function(done) {
            let entryID = $('.feed .entry');

            expect(entryID.length).toBeGreaterThan(0);
        });
    });

    describe("New Feed Selection", function() {
        let feedOne;
        let feedTwo;

        //Stores first and second feeds to their variables, asynchronously
        beforeEach(function(done){
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                loadFeed(1, function() {
                    feedTwo = $('.feed').html();
                    done();
                });
            });
        });

        //Tests if content really changed after switching, comparing the first and second ones
        it("really changes content", function(done) {
            expect(feedOne).not.toEqual(feedTwo);
        })
    });
}());
