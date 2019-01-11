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
            $('.menu-icon-link').trigger('click');
            expect(bodyTag).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').trigger('click');
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
            Oi, senhor(a) revisor(a)! Estou com um problema. O beforeEach,
            acima, está mostrando a tela de specs/failures de uma forma
            muita estranha para mim. Eu testei essa tarefa em outro projeto
            clonado do zero, também enviei ao meu instrutor e o erro é somente
            comigo!
            
            Ele não está exibindo a tela completa do Jasmine, somente a
            logo, versão e, aleatoriamente, os testes nas bolinhas verdes, às
            vezes nenhuma, às vezes 3, às vezes 6.
            O problema é que não está exibindo o log, descrevendo os describes
            e its! Como resolvo isso?

            Se ajudar, fiz um gif e coloquei no giphy :)
            https://media.giphy.com/media/2WGEhbGrJK2ppKfFTw/giphy.gif
        */

        it('has an entry in the feed', function(done) {
            let articleTag = document.getElementsByClassName("entry-link")[0];

            console.log(articleTag);

            expect(articleTag).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        });

        it("really changes content", function(done) {
            //expect
            done();
        })
    });

}());
