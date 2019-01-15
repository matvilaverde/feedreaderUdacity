// This project is still missing comments and README because it's not the final version!
// I have some problems on the last tests and am asking somethings directly to you guys! :)
// By the way, should I leave the TODOs in the final version or is it optional?
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has an url', function() {
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has defined name', function() {
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            })
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        const bodyTag = document.getElementsByTagName("body")[0];

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('hides menu by default', function() {
            expect(bodyTag).toHaveClass('menu-hidden');
        });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('hides and shows menu', function() {
            const menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect(bodyTag).not.toHaveClass('menu-hidden');
            menuIcon.click();
            expect(bodyTag).toHaveClass('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* 
            Hello, mister or miss reviewer! I have a problem. My beforeEach
            above is showing the specs/failures screen in a very weird
            way for me. I've tested this task in another cloned project from
            scratch and also sent it to my instructor and the error happens
            only with me!
            
            My html isn't showing Jasmine's full screen, only the logo, version
            and, randomly (as expected from the seeds), the little green balls,
            sometimes none, 3, 6. The problem is the empty log. It's not
            exibiting the log, it's not writing my "describes" and "its".

            How do I solve this?

            If it helps, I've made a gif and uploded to giphy :)
            https://media.giphy.com/media/2WGEhbGrJK2ppKfFTw/giphy.gif
        */

        it('has an entry in the feed', function(done) {
            let entryID = $('.feed.entry');

            expect(entryID).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        /*

        NOTE:

        I can't really know if the following test is working, due
        to the error I've described above. Even when I type my expect
        as "expect(feedOne).toEqual(feedTwo);" it is passing as spec,
        I can't find errors anymore. This is happening when I
        use beforeEach anywhere.

        */

        let feedOne;
        let feedTwo;

        beforeEach(function(done){
            loadFeed(0, function() {
                feedOne = {entry : $('.feed').html()};
            });
            
            loadFeed(1, function() {
                feedTwo = {entry : $('.feed').html()};
                done();
            });
        });

        it("really changes content", function(done) {
            expect(feedOne).not.toEqual(feedTwo);
            done();
        })

    });

}());
