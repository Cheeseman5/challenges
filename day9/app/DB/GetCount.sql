CREATE PROCEDURE `GetCount` ()
BEGIN
	SELECT count FROM store.store LIMIT 1;
END